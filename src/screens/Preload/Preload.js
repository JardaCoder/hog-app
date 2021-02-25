import { useNavigation } from "@react-navigation/core";
import React, {useEffect} from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useUserContext } from "../../contexts/UserContext";

export default function App() {

    const navigation = useNavigation();
    const [state, dispatch] = useUserContext();

    const verificarUsuario = async () => {
      //await AsyncStorage.clear();
      let usuario = JSON.parse(await AsyncStorage.getItem('usuario'));
      if(usuario && usuario.id){
        dispatch({
          type: 'setUsuario',
          usuario: usuario
        });
      
        navigation.reset({
          routes:[{name:'MainTab'}]
        })
       
      }else{
        navigation.reset({
          routes:[{name:'MainTab'}]
        })
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
      <ActivityIndicator size="large" color={global.red}/>
    </View>
  );
}