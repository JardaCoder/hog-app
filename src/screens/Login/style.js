import React from 'react';
import { StyleSheet} from 'react-native';

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
    text:{
      marginBottom: 20,
      marginTop:'20%'
    }

  });

 export default styles;