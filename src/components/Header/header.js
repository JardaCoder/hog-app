<<<<<<< HEAD
import React from "react";
import { View, Text, StyleSheet } from "react-native";
=======
import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";

>>>>>>> 151b72b77a571a2ed57c5c5df7c3eb16636002d7


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

    button:{
      width: '100%',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'row',
      height: 60,
      paddingHorizontal:10,
      backgroundColor: global.red,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 5
    },

    text:{
        fontFamily: global.fontFamily,
        fontSize: 22,
        color:'#fff', textAlign:'center',
        width: '50%'
    }

});

