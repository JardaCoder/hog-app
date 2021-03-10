import React, {} from "react";
import {Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import stylesDefault from "../../util/style";
import {MaterialIcons } from '@expo/vector-icons';



export default function cardInformativo(props) {

  const background = props.color ? props.color : 'white';
  const color = props.color ? 'white' : 'black';

  return (
    <TouchableOpacity onPress={() => props.onPress ?  props.onPress() : console.log('noPress')}
      style={[stylesDefault.boxShadow, style.card, {backgroundColor: background }]}>
      
        {props.icon}
        <Text style={[stylesDefault.textoPadrao, {textAlign:'center', color: color }]}>{props.titulo}</Text>
      
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({

card:{
  width: Dimensions.get('window').width / 3.49,
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

