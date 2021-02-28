import React, {useEffect, useState} from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity,ImageBackground} from "react-native";
import { useUserContext } from "../../contexts/UserContext";
import stylesDefault from '../../util/style';
import style from './style';
import Header from './../../components/Header/header';
import { Feather } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import { Buffer } from "buffer";

export default function NovoPost() {

  const [userState, dispatch] = useUserContext();
  const [image, setImage] = useState('');
  const [post, setPost] = useState({})

  const navegarParaRank =  () =>{
    //TODO
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    console.log(result);

    if (!result.cancelled) {
      let imageUri = Buffer.from(result.base64, "base64");
      setImage(result.uri);
    }
  };

  const removerImagem = () => {
    setImage(null);
  }

  return (
    <SafeAreaView style={[stylesDefault.container]}>
       <Header titulo={"Criar postagem"}/>
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
      </View>
    </SafeAreaView>
  );
}
