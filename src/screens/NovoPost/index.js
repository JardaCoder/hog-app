import React, {useEffect, useState} from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity,ImageBackground, ScrollView, TextInput, Alert} from "react-native";
import { useUserContext } from "../../contexts/UserContext";
import stylesDefault from '../../util/style';
import style from './style';
import Header from './../../components/Header/header';
import { Feather } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import { Buffer } from "buffer";
import {Picker} from '@react-native-picker/picker';
import ButtonPadrao from "../../components/ButtonPadrao/button";
import api from './../../services/api';
import { useNavigation } from '@react-navigation/core';


export default function NovoPost({route}) {

  const editando = route.params?.post ? true : false;
  var postEditavel = null;
  if(editando){
    postEditavel = route.params?.post;
  }


  const [userState, dispatch] = useUserContext();
  const [image, setImage] = useState(editando ? postEditavel.imagem?.urlImagem : '');
  const [imageBytes, setImageBytes] = useState(null);
  const [post, setPost] = useState(editando ? postEditavel : {})
  const [tipoPost, setTipoPost] = useState(null);
  const [categoriaId, setCategoriaId] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const resetCampos = () =>{
    if(editando){
      navigation.pop();
      return;
    }
    setPost({});
    setImage(null);
    setImageBytes(null);
    setTipoPost(null);
    setCategoriaId(null);
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.4,
    });

    if (!result.cancelled) {
      setImageBytes(Array.from(Buffer.from(result.base64, "base64")));
      setImage(result.uri);
    }
  };

  const removerImagem = () => {
    setImage(null);
  }

  const mapCategorias = () =>{
    return(categorias.map((categoria, index) => <Picker.Item key={index} label={categoria.nome} value={categoria.id} />)) 
  }

  const buscarCategorias = async () =>{
    await api.get('/api/categoria/todos').then(result => {
      setCategorias(result.data);
    });
  }

 const salvarPost = async () =>{

  if(post.tipoPost == 'PROJETO'){
    if(!validarTipoProjeto()){
      Alert.alert("Atenção!", "Os campos categoria, título, descrição e imagem são obrigatórios!")
      return;
    }
  }else{
    if(!validarIndicacao()){
      Alert.alert("Atenção!", "Os campos título, descrição e imagem são obrigatórios!")
      return;
    }
  }

  setLoading(true);
  try {
    if(editando){
      post.imagem.bytes = imageBytes;
    }else{
      post.imagem = {bytes:imageBytes}
    }
    post.usuarioId = userState.id;
   
    await api.post('/api/post/', post).then(result => {
        Alert.alert('Sucesso!', 'Seu post foi salvo com sucesso!');
        resetCampos()
    });
  } catch (error) {
    Alert.alert("Atenção", "Algo deu errado ao salvar o post")
  }finally{
    setLoading(false);
  }
 }

 const validarTipoProjeto = () =>{
    if(!post.categoriaId || !post.titulo || !post.descricao  || !image){
      return false;
    }
    return true;
 }

 const validarIndicacao = () =>{
  if(!post.titulo || !post.descricao  || !image){
    return false;
  }
  return true;
}

 useEffect(() =>{
  return navigation.addListener('focus', () =>  buscarCategorias());
 },[navigation])

  return (
    <SafeAreaView style={[stylesDefault.container]}>
       <Header titulo={editando ? "Editar postagem":"Criar postagem"} pop={editando}/>
      <ScrollView showsVerticalScrollIndicator={false} style={stylesDefault.scrollView}>
        <View style={style.container}>
          <View style={style.containerImagem}>
            {image ?
              <ImageBackground source={{uri : image}} style={style.image} resizeMode="cover">
                  <TouchableOpacity onPress={removerImagem} style={style.apagarImagem}>
                    <Feather name="trash" size={30} color={global.red} />
                  </TouchableOpacity>
              </ImageBackground>
              :
              <View style={style.adicionarImagem}>
                <TouchableOpacity style={style.circuloImagem} onPress={pickImage}>
                  <Feather name="upload" size={40} color={global.red} />
                </TouchableOpacity>
                <Text style={[stylesDefault.textoPadrao, {color:'#fff', marginTop: 10}]}>Adicione uma imagem de capa</Text>
              </View>
            }
          </View>
          <View style={style.inputs}>
            <View style={style.inputUnico}>
              <View style={stylesDefault.input}>
                <Picker
                  style={{width:'100%', height:'100%'}}
                  itemStyle={{fontSize: 40}}
                  selectedValue={post.tipoPost}
                  onValueChange={(value, index) =>
                    setPost({...post, tipoPost:value})
                  }>
                  <Picker.Item label='#d1d1d1' color='#808080' label="Tipo de projeto" value={null} />
                  <Picker.Item label="Projeto" value="PROJETO" />
                  <Picker.Item label="Indicação" value="INDICACAO" />
                </Picker>
              </View>
            </View>
            {post.tipoPost == 'INDICACAO' &&(
              <View>
                <View style={style.inputUnico}>
                  <TextInput
                      value={post.titulo}
                      onChangeText={ text => setPost({...post, titulo:text})}
                      style={stylesDefault.input}
                      placeholder="Título do post"
                    />
                </View>
                <View style={style.inputUnico}>
                  <TextInput
                      value={post.descricao}
                      onChangeText={(value) => setPost({...post, descricao:value})}
                      style={[stylesDefault.textArea]}
                      placeholder="Descrição"
                      multiline={true}
                      maxLength={500}
                    />
                </View>
              </View>
            )}



            {post.tipoPost == 'PROJETO' &&(
              <View>
              <View style={style.inputUnico}>
                <View style={stylesDefault.input}>
                  <Picker
                    style={{width:'100%', height:'100%'}}
                    itemStyle={{fontSize: 40}}
                    selectedValue={post.categoriaId}
                    onValueChange={(value, index) =>
                      setPost({...post, categoriaId:value})
                    }>
                    <Picker.Item  label='#d1d1d1' color='#808080'  label="Categoria" value={null} />
                    {mapCategorias()}
                  </Picker>
                </View>
              </View>
                <View style={style.inputUnico}>
                  <TextInput
                    	value={post.titulo}
                      onChangeText={ text => setPost({...post, titulo:text})}
                      style={stylesDefault.input}
                      placeholder="Título do post"
                    />
                </View>
                <View style={style.inputUnico}>
                  <TextInput
                      value={post.descricao}
                      onChangeText={(value) => setPost({...post, descricao:value})}
                      style={[stylesDefault.textArea]}
                      placeholder="Descrição"
                      multiline={true}
                      maxLength={250}
                    />
                </View>
                <View style={style.inputUnico}>
                  <TextInput
                      value={post.objetivo}
                      onChangeText={(value) => setPost({...post, objetivo:value})}
                      style={[stylesDefault.textArea]}
                      placeholder="Objetivos"
                      multiline={true}
                      maxLength={250}
                    />
                </View>
                <View style={style.inputUnico}>
                  <TextInput
                      value={post.beneficios}
                      onChangeText={(value) => setPost({...post, beneficios:value})}
                      style={[stylesDefault.textArea]}
                      placeholder="Benefícios"
                      multiline={true}
                      maxLength={250}
                    />
                </View>
              </View>
            )}
            {post.tipoPost ?
              <View style={style.botao}>
                <ButtonPadrao onPress={salvarPost} text='Salvar post' loading={loading}/>
              </View> : null
            }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
