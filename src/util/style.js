import React from 'react';
import { StyleSheet} from 'react-native';


global.red = '#F24150';
global.blue = '#1F2F3F';
global.white = '#F1F8FF';
global.lightBlue = '#B0D8FF';
global.graphite = '#353535';
global.fontFamily = 'popins'

const stylesDefault = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: global.white
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
    textoPequenoRed:{
      fontFamily:global.fontFamily,
      fontSize:10,
      color:global.red
    }

  });

 export default stylesDefault;