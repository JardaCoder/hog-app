import React, {} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import stylesDefault from "../../util/style";
import {FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';



export default function cardInformativo(props) {
  return (
    <TouchableOpacity onPress={() => console.log('oi')} style={[stylesDefault.boxShadow, style.card]}>
      
        <MaterialIcons  name="dynamic-feed" size={40} color="black" />
        <Text style={[stylesDefault.textoPadrao, {textAlign:'center'}]}>{props.titulo}</Text>
      
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({

card:{
  width:'25%',
  minWidth:105,
  height:130,
  backgroundColor:'white',
  borderRadius:5,
  marginHorizontal:4,
  justifyContent: 'center',
  alignItems:'center',
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.30,
  shadowRadius: 4.65,
  elevation: 5,
}





});

