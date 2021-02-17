import React, {useState} from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function button(props) {
  return (
    props.loading ?
      <ActivityIndicator size="large" color={global.red}/>
    :
      <TouchableOpacity style={[style.button, props.style ]} onPress={() => props.onPress()}>
         <FontAwesome name="google" size={24} color="#fff" />
        <Text style={style.text}>{props.text}</Text>
      </TouchableOpacity>
    
  );
}

const style = StyleSheet.create({
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
      elevation: 8
    },

    text:{
        fontFamily: global.fontFamily,
        fontSize: 22,
        color:'#fff', textAlign:'center',
        width: '50%'
    }

});

