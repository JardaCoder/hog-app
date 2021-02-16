import React, {useState} from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";

export default function button(props) {
  return (
    props.loading ?
      <ActivityIndicator size="large" color={global.red}/>
    :
      <TouchableOpacity style={[style.button, props.style ]} onPress={() => props.onPress()}>
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
      height: 50,
      backgroundColor: global.red
    },

    text:{
        fontFamily: global.fontFamily,
        fontSize: 14
    }

});

