import React, {memo} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign  } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/core';
import voltar from '../../assets/voltar.png'

 function Header(props) {

  const navigation = useNavigation();
  
  return (
    <View style={style.header}>
      {props.pop &&(
        <TouchableOpacity onPress={() => navigation.pop()} style={style.botaoVoltar}>
          <Image style={style.imagem} source={voltar}></Image>
        </TouchableOpacity>
      )}
      
      <Text style={style.tituloHeader}>{props.titulo}</Text>
    </View>
  );
}

export default memo(Header)

const style = StyleSheet.create({

  header:{
    width: '100%',
    height: '17%',
    justifyContent:'center', 
    alignItems:'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  },

  tituloHeader:{
    fontFamily:global.fontFamily,
    fontSize:30
  },

  botaoVoltar:{
    width:40,
    height:40,
    borderRadius:55,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    left:30
  },

  imagem:{
    width:30,
    height:30,
    resizeMode:'contain'
  }
});

