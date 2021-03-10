import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';


global.red = '#F24150';
global.blue = '#1F2F3F';
global.white = '#F1F8FF';
global.lightBlue = '#B0D8FF';
global.graphite = '#353535';
global.fontFamily = 'popins'
global.bold = 'bold'

const stylesDefault = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: global.white,
      
    },
    text:{
      fontFamily: global.fontFamily,
      fontSize: 16,
      color:'#000',
      textAlign:'center',
      justifyContent:'center',
      width: '50%'
    },
    titulo:{
      fontSize: 20,
      fontFamily: global.fontFamily,

    },
    tituloMaior:{
      fontSize: 24,
      fontFamily: global.fontFamily,
    },
    textoPadrao:{
      fontSize: 16,
      fontFamily: global.fontFamily,

    },
    textoPadraoBold:{
      fontSize: 16,
      fontFamily: global.bold,

    },
    textoPequenoRed:{
      fontFamily:global.fontFamily,
      fontSize:10,
      color:global.red
    },
    boxShadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 5,
    },
    scrollView:{
      width:'100%',
      height:Dimensions.get('screen').height,
    },
    input:{
      borderWidth: 0,
      backgroundColor:'#fff',
      borderRadius: 4,
      width: '95%',
      fontSize: 18,
      fontFamily: global.fontFamily,
      paddingLeft: 20,
      height: 50,
      lineHeight: 20,
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.16,
      shadowRadius: 3.84,
      elevation: 5,
      marginLeft: '2.5%'
  },
  textArea:{
    borderWidth: 0,
      backgroundColor:'#fff',
      borderRadius: 4,
      width: '95%',
      fontSize: 18,
      fontFamily: global.fontFamily,
      paddingLeft: 20,
      height: 150,
      lineHeight: 20,
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.16,
      shadowRadius: 3.84,
      elevation: 5,
      textAlignVertical:'top',
      marginLeft: '2.5%'
  }


  });

 export default stylesDefault;