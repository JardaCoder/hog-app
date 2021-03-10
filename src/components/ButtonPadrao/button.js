import React, {useState} from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';

export default function buttonPadrao(props) {

  const onPress =  props.onPress ? props.onPress : console.log('');

  return (
    props.loading ?
      <ActivityIndicator size="large" color={global.red}/>
    :
      <TouchableOpacity style={[style.button, props.style ]} onPress={() => onPress()}>
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
      backgroundColor: global.blue,
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
        fontSize: 18,
        color:'#fff', textAlign:'center',
        width: '50%'
    }

});

