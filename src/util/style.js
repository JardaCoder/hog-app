import React from 'react';
import { StyleSheet} from 'react-native';


global.red = 'red';
global.blue = '#16394d';
global.lightBlue = 'aqua'

const stylesDefault = StyleSheet.create({
    container: {
      flex:1,
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });

 export default stylesDefault;