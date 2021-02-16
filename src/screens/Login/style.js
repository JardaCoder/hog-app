import React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
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
      // shadowColor: 'black',
      // shadowOffset: {
      //   width: 0,
      //   height: 6,
      // },
      // shadowOpacity: 0.39,
      // shadowRadius: 8.30,
      // elevation: 3,
  
    }

  });

 export default styles;