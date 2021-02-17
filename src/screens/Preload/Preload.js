import { useNavigation } from "@react-navigation/core";
import React, {useEffect} from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {

    const navigation = useNavigation();

    const verificarUsuario = async () => {
      let usuario = await AsyncStorage.getItem('usuario');
      
      if(usuario && usuario.id){
        setTimeout(() => {
          navigation.reset({
            routes:[{name:'Login'}]
          })
        }, 100);
      }else{
        setTimeout(() => {
          navigation.reset({
            routes:[{name:'Login'}]
          })
        }, 100);
      }
      
    }

    useEffect(() => {
      verificarUsuario();
    }, [])
    
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:global.blue
      }}
    >
      <ActivityIndicator size="large" color="red"/>
    </View>
  );
}