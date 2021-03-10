import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import stylesDefault from "../../util/style";



export default function cardPosicao(props) {

  const posicao = props.posicao ? props.posicao : props.index + 1;
  const usuario = props.usuario;
  return (
    <View style={[style.cardRanking, {backgroundColor:props.cor}]}>
      <View style={style.grupoTexto}>
        <Text style={[stylesDefault.textoPadrao, {color:'white'}]}>{posicao}º</Text>
        <Text style={[stylesDefault.textoPadrao, style.grupoTextoSegundoItem]}>{props.usuario.nome} {props.texto}</Text>
      </View>
      <View style={style.grupoTexto}>
        <FontAwesome style={{marginBottom:7}} name="angle-up" size={24} color="white" />
        <Text style={[stylesDefault.textoPadrao, style.grupoTextoSegundoItem]}>{props.usuario.pontosSplit}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({

  cardRanking:{
    width: '100%',
    height:60,
    marginTop:20,
    borderRadius: 5,
    backgroundColor:global.blue,
    justifyContent:'space-around',
    alignItems: 'center',
    flexDirection:'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 5,
},
  grupoTexto:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  grupoTextoSegundoItem:{
    color:'white',
    marginLeft:10
  },





});

