<<<<<<< HEAD
import React from "react";
import { View, SafeAreaView } from "react-native";
=======
import React, {useEffect, useState, useRef} from "react";
import { View, Text, Image, SafeAreaView, FlatList, ActivityIndicator, ImageBackground,TouchableOpacity } from "react-native";
>>>>>>> 151b72b77a571a2ed57c5c5df7c3eb16636002d7
import { useUserContext } from "../../contexts/UserContext";
import stylesDefault from '../../util/style';
import style from './style'
import Header from './../../components/Header/header';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { FontAwesome5,AntDesign  } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/core';

export default function Post() {

  const [userState, dispatch] = useUserContext();
  const [loading, setLoading] = useState(true);
  const [up, setUp] = useState(null);
  const menu = useRef(null);
  const image = 'https://passevip.com.br/wp-content/uploads/2018/04/2018-04-23-como-aumentar-o-alcance-e-atrair-publico-para-seu-evento.jpg'

  const navigation = useNavigation();

  const navegarParaRank =  () =>{
    //TODO
  }
  const DATA = [
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação", 
      image:{url:image}
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

  const verDetalhes = (post) => {
    navigation.navigate("PostDetalhe", {post:post})
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

  const Item = ({ item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={[style.item, stylesDefault.boxShadow,  ]}>
          <ImageBackground source={{uri : image}} style={style.image} resizeMode="cover">
              <Text style={[stylesDefault.textoPadrao, style.textoCard]}>Festa chapacera sexta depois do trampo</Text>
              <Text style={[style.textoCategoria, {backgroundColor:'red'}]}>Projeto interno</Text>
          </ImageBackground>
       <View style={[style.footerCard]}>
          <Image source={{uri:userState.fotoUrl}} style={style.imagemUsuario}></Image>
          <View style={style.containerTexto}>
              <Text style={stylesDefault.textoPadraoBold}>{userState.nome}</Text>
              <Text style={stylesDefault.textoPequenoRed}>50 pontos</Text>
          </View>
          <View style={style.botoes}>
          <TouchableOpacity style={style.up}>
              <AntDesign name="up" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity  style={style.up}>
              <AntDesign name="down" size={24} color="#fff" />
          </TouchableOpacity>
          </View>
       </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() =>verDetalhes(item)}
      />
    );
  };
  return (
    <SafeAreaView style={[stylesDefault.container]}>
      <Header titulo={"Postagens"}></Header>
      <View style={style.container}>
        <FlatList
          style={style.lista}
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          // onEndReached={() => alert('Oi')}
          // onEndReachedThreshold={0.1}
          //onRefresh={buscarNotificacoes}
          refreshing={false}
          ListHeaderComponentStyle={{height:50, backgroundColor:'#fff', paddingHorizontal:15}}
          ListHeaderComponent={() =>(
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
              <Menu
                ref={menu}
                onHidden={onHiddenMenu}
                button={<FontAwesome5 onPress={showMenu} name="sort-amount-up-alt" size={24} color="black" />}
              >
                <MenuItem onPress={hideMenu} disabled>Ordenar por</MenuItem>
                <MenuDivider />
                <MenuItem onPress={hideMenu}>Mais recente</MenuItem>
                <MenuItem onPress={hideMenu} >Mais curtido</MenuItem>
              </Menu>
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
