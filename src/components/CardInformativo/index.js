import React from "react";
import {Text, StyleSheet, TouchableOpacity, Dimensions, View } from "react-native";
import stylesDefault from "../../util/style";



export default function cardInformativo(props) {

  const background = props.color ? props.color : 'white';
  const color = props.color ? 'white' : 'black';

  return (
    <TouchableOpacity onPress={() => props.onPress ?  props.onPress() : console.log('noPress')}
      style={[stylesDefault.boxShadow, style.card, {backgroundColor: background }]}>
        {props.icon}
        <Text style={[stylesDefault.textoPadrao, {textAlign:'center', color: color }]}>{props.titulo}</Text>
        {props.quantidadePost &&(
          <View style={style.quantidade}>
            <Text style={[stylesDefault.textoPadrao, {textAlign:'center', color: color, fontSize:10 }]}>{props.quantidadePost} posts</Text>
          </View>
        )}
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
},

quantidade:{
  width: 'auto',
  padding: 2,
  paddingHorizontal:8,
  borderRadius:5,
  backgroundColor:'rgba(255, 255, 255, 0.1)',
  marginTop:5
 
}




});

