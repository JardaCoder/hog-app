import React, {useState} from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';
import stylesDefault from "../../util/style";



export default function Header(props) {
  return (
    <View style={stylesDefault.header}>
      <Text style={stylesDefault.tituloHeader}>{props.titulo}</Text>
    </View>
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
      elevation: 5
    },

    text:{
        fontFamily: global.fontFamily,
        fontSize: 22,
        color:'#fff', textAlign:'center',
        width: '50%'
    }

});

