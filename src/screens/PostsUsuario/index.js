
import React, {useEffect, useState, useRef, useCallback} from "react";
import { View, Text, Image, SafeAreaView, FlatList, ActivityIndicator,
   ImageBackground,TouchableOpacity,ScrollView, VirtualizedList } from "react-native";
import { useUserContext } from "../../contexts/UserContext";
import stylesDefault from '../../util/style';
import style from './style'
import Header from './../../components/Header/header';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { FontAwesome5,AntDesign,FontAwesome  } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/core';
import usePost from './../../hooks/usePost';
import ListVazia from './../../components/ListVazia/header';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';

export default function PostsUsuario({route}) {

  const tipo = route.params?.tipo == 'indicacao' ? 1 : 0;
  const [userState, dispatch] = useUserContext();
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(0);
  const [buscarPosts] = usePost();
  const [dados, setDados] = useState([]);
  const [filter, setFilter] = useState(0)
  const [filtro, setFiltro] = useState({usuarioDonoId: userState.id, tipoPost:'PROJETO'});
  const [categorias, setCategorias] = useState([]);

  const navigation = useNavigation();

 

  const buscarCategorias = async () =>{
    await api.get('/api/categoria/todos').then(result => {
      setCategorias(result.data);
    });
  }


  const editarPost = (post) => {
    navigation.push("EditarPost", {post:post})
  }

  const buscarTodosPosts = async () => {
 
    if(loading){
      return;
    }
    //filtro.tipoPost = filter == 1 ? 'INDICACAO' : 'PROJETO'
    console.log(filtro)
    if(filter == 1){
      filtro.tipoPost = 'INDICACAO'
    }
    setLoading(true);
    let dados = await buscarPosts(filtro, 'inclusao');
    setDados(dados); 
    setLoading(false);
  }

  const upCard = (item, index) =>{
    item.quantidadeUp++;
    setUpdate(update + 1);
  }

  const downCard = (item, index) =>{
    item.quantidadeDown++;
    setUpdate(update + 1);
  }

  const refresh = (tipo) =>{
    filtro.tipoPost = tipo;
    setDados([]);
    buscarTodosPosts();
  }

  const Item = ({ item, onPress, index}) => (
    <TouchableOpacity onPress={onPress} style={[style.item, stylesDefault.boxShadow,  ]}>
          <ImageBackground source={{uri : item.imagem?.urlImagem}} style={style.image} resizeMode="cover">
              <Text style={[stylesDefault.textoPadrao, style.textoCard]}>{item.titulo}</Text>
              {item.tipoPost == 'INDICACAO' &&(
                 <Text style={[style.textoCategoria, {backgroundColor: global.red}]}>Indicação</Text>
              )}
              <Text style={[style.textoCategoria, {backgroundColor: item.categoria?.hexaCor}]}>{item.categoria?.nome}</Text>
          </ImageBackground>
       <View style={[style.footerCard]}>
          <Image source={{uri:item.usuario.fotoUrl}} style={style.imagemUsuario}></Image>
          <View style={style.containerTexto}>
              <Text style={stylesDefault.textoPadraoBold}>{item.usuario?.nome}</Text>
              <Text style={stylesDefault.textoPequenoRed}>{item.usuario?.pontosSplit} pontos</Text>
          </View>
          <View style={style.botoes}>
          <TouchableOpacity disabled={true} style={style.up} onPress={() => upCard(item, index)}>
              <AntDesign name="up" size={24} color="#fff" />
              <Text style={style.quantidadeUpDown}>{item.quantidadeUp || 0}</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={true}  style={style.up} onPress={() => downCard(item, index)}>
              <Text style={style.quantidadeUpDown}>{item.quantidadeDown || 0}</Text>
              <AntDesign name="down" size={24} color="#fff" />
          </TouchableOpacity>
          </View>
       </View>
    </TouchableOpacity>
  );
  

  const renderItem = useCallback(
    ({ item, index}) => {
      return (
        <Item
          item={item}
          onPress={() =>editarPost(item)}
          index={index}
        />
      );
    },
    [update],
  )

  useFocusEffect(
    React.useCallback(() => {
      setDados([]);
      buscarTodosPosts()
    }, [])
  )


  useEffect(() => {
    buscarTodosPosts()
    buscarCategorias();
  }, [])

  return (
    <SafeAreaView style={[stylesDefault.container]}>
      <Header titulo={"Minhas idéais"} pop={true}></Header>
      <View style={style.container}>
        <VirtualizedList
          style={style.lista}
          showsVerticalScrollIndicator={false}
          data={dados}
          extraData={update}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          getItemCount={() => dados.length}
          getItem={(data, index) => {
            return data[index]
          }}
          removeClippedSubviews={true}
          refreshing={false}
          ListEmptyComponent={ !loading ? <ListVazia titulo="Nenhum post encontrado"/> : null}
          ListHeaderComponentStyle={{height:70, backgroundColor:'#fff', paddingHorizontal:15}}
          ListHeaderComponent={() =>(
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{width: '100%', flexDirection:'row', height:30, marginBottom:10}}>
                <TouchableOpacity style={[style.itemHeader,
                   {borderBottomColor:filtro.tipoPost == 'PROJETO' ? global.lightBlue : 'transparent'}]} onPress={() =>{refresh('PROJETO');}}>
                  <Text style={[stylesDefault.textoPadrao, {fontSize:14}]}>Projetos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.itemHeader, 
                  {borderBottomColor:filtro.tipoPost == 'INDICACAO' ? global.lightBlue : 'transparent'}]}  onPress={() => {refresh('INDICACAO');}}>
                  <Text style={[stylesDefault.textoPadrao, {fontSize:14}]}>Indicações</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          )}
          ListFooterComponent={() =>(
            loading ? 
              <ActivityIndicator size="large" color={global.red}></ActivityIndicator>
              : null
          )}
          ListFooterComponentStyle={{height:180, marginTop:10}}
        />
      </View>
    </SafeAreaView>
  );
}
