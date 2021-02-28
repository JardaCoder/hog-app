import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    image:{
      flex:1,
      resizeMode: "cover",
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    containerButton:{
      height:'40%',
      width: '100%',
      backgroundColor:'white',
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
      alignItems: 'center',
  
    },
    icone:{
      width:40,
      height:50,
      position:'absolute',
      top:Dimensions.get('screen').height / 3
    },
    text:{
      marginBottom: 20,
      marginTop:'10%'
    }

  });

 export default styles;