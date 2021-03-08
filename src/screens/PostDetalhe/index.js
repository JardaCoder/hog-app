import React, {useEffect, useState, useRef} from "react";
import { View, Text, Image, SafeAreaView, FlatList, ActivityIndicator, ImageBackground,TouchableOpacity } from "react-native";
import { useUserContext } from "../../contexts/UserContext";
import stylesDefault from '../../util/style';
import style from './style'
import Header from './../../components/Header/header';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { FontAwesome5,AntDesign  } from '@expo/vector-icons'; 

export default function PostDetalhe({navigation, route}) {

  const post = route.params.post;
  const [userState, dispatch] = useUserContext();
  const [loading, setLoading] = useState(true);
  const [up, setUp] = useState(null);
  const menu = useRef(null);
 

  const navegarParaRank =  () =>{
    //TODO
  }
  const DATA = [
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação"
    },
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação"
    },
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação"
    },
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação"
    },
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação"
    },
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação"
    },
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação"
    },
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação"
    },
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação"
    },    
  ];

  const buscarPosts = () =>{
    
  }

  const upCard = () =>{

  }

  const showMenu = () =>{
    menu.current.show();
  }

  const hideMenu = () =>{
    menu.current.hide();
  }

  const onHiddenMenu = () =>{
    buscarPosts();
  }

  return (
    <SafeAreaView style={[stylesDefault.container]}>
      <Header titulo={"Detalhes do post"}></Header>
      <View style={style.container}>
      <ImageBackground source={{uri : post.image.url}} style={style.image} resizeMode="cover">
              <Text style={[stylesDefault.textoPadrao, style.textoCard]}>Festa chapacera sexta depois do trampo</Text>
              <Text style={[style.textoCategoria, {backgroundColor:'red'}]}>Projeto interno</Text>
      </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
