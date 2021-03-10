import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";



export default function button(props) {
  return (
    <View style={style.container}>
      <ActivityIndicator size="large" color={global.red}/>
    </View>
      
    
  );
}

const style = StyleSheet.create({

  container:{
    justifyContent: 'center',
    alignItems:'center',
    flex:1
  }

});

