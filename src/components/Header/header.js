import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Header(props) {
  return (
    <View style={style.header}>
      <Text style={style.tituloHeader}>{props.titulo}</Text>
    </View>
  );
}



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
});

