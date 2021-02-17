import React from 'react';
import { StyleSheet} from 'react-native';


global.red = 'red';
global.blue = '#16394d';
global.lightBlue = 'aqua'

const stylesDefault = StyleSheet.create({
    container: {
      flex:1,
    },
    text:{
      fontFamily: global.fontFamily,
      fontSize: 16,
      color:'#000',
      textAlign:'center',
      justifyContent:'center',
      width: '50%'
    }
  });

 export default stylesDefault;