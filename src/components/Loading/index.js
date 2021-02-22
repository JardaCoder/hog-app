import React, {useState} from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';



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

