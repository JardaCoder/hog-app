import React, {useEffect, useState, useRef } from "react";
import { View, Text, Image, SafeAreaView, ScrollView, ActivityIndicator, ImageBackground,TouchableOpacity } from "react-native";
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
        <ScrollView showsVerticalScrollIndicator={false} style={stylesDefault.scrollView}>
          <View style={style.container}>
            <ImageBackground source={{uri : post.imagem?.urlImagem}} style={style.image} resizeMode="cover">
                  <Text style={[style.textoCategoria, {backgroundColor:post.categoria?.hexaCor}]}>{post.categoria?.nome}</Text>
            </ImageBackground>
        
            <View style={{width:'95%'}}>
              <Text style={[stylesDefault.titulo, style.textoTitulo]}>Título</Text>
              <Text style={[stylesDefault.textoPadrao, style.textoInfo]}>{post.titulo}</Text>
            </View>
            <View style={{width:'95%'}}>
              <Text style={[stylesDefault.titulo, style.textoTitulo]}>Descrição</Text>
              <Text style={[stylesDefault.textoPadrao, style.textoInfo]}>{post.descricao}</Text>
            </View>

            {post.objetivo &&(
              <View style={{width:'95%'}}>
                <Text style={[stylesDefault.titulo, style.textoTitulo]}>Objetivo</Text>
                <Text style={[stylesDefault.textoPadrao, style.textoInfo]}>{post.objetivo}</Text>
              </View>
            )}

            {post.beneficios &&(
              <View style={{width:'95%'}}>
                <Text style={[stylesDefault.titulo, style.textoTitulo]}>Benefícios</Text>
                <Text style={[stylesDefault.textoPadrao, style.textoInfo]}>{post.beneficios}</Text>
              </View>
            )}

         
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}
