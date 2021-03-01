import React from 'react';
import { StyleSheet} from 'react-native';


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
      height:'100%'
    },
    input:{
      width:'100%',
      height:50,
      borderRadius:5,
      padding:10,
      backgroundColor:'#fff',
      fontSize:16,
      fontFamily:global.fontFamily,
    },
    inputUnico:{
      width:'100%',
      height:'100%',
      backgroundColor:'red',
      padding:20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 24,
    }


  });

 export default stylesDefault;