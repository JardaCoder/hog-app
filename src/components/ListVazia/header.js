import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons'; 



export default function ListVazia(props) {
  return (
    <View style={style.header}>
      <Entypo name="emoji-sad" size={50} color="black" />
      <Text style={style.tituloHeader}>{props.titulo}</Text>
    </View>
  );
}



const style = StyleSheet.create({

  header:{
    flex:1,
    justifyContent:'center', 
    alignItems:'center',
    flexDirection: 'column',
    marginTop:20
  },

  tituloHeader:{
    fontFamily:global.fontFamily,
    fontSize:18,
    marginTop:10
  },

});

