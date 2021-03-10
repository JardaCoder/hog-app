import { useNavigation } from "@react-navigation/core";
import React, {useEffect} from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useUserContext } from "../../contexts/UserContext";
import { useRef } from "react/cjs/react.development";
import * as Notifications from 'expo-notifications';
import useNotificacao from './../../hooks/useNotificacao';

export default function App() {

    const navigation = useNavigation();
    const [userState, dispatch] = useUserContext();
    const [getExpoToken, buscarNotificacoes, setListeners] = useNotificacao();

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    })

    const verificarUsuario = async () => {
     ///await AsyncStorage.clear();
      let usuario = JSON.parse(await AsyncStorage.getItem('usuario'));
      if(usuario && usuario.id){
        dispatch({
          type: 'setUsuario',
          usuario: usuario
        });
        buscarNotificacoes(usuario.id);
        setListeners(usuario.id);

        navigation.reset({
          routes:[{name:'MainTab'}]
        })
       
      }else{
        navigation.reset({
          routes:[{name:'Login'}]
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