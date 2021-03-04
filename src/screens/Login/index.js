import React, {useState, useEffect} from "react";
import { View, Text, Image, ImageBackground, Alert, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Google from 'expo-google-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Permissions from 'expo-permissions';


import image from '../../assets/login.png';
import iconeHibrido from '../../assets/hibriBranco.png';
import styleDefault from '../../util/style'

import Button from '../../components/button/button'
import style from "./style";
import { useNavigation } from "@react-navigation/core";
import mainTab from './../../stacks/MainTab';
import { useUserContext } from "../../contexts/UserContext";
import api from '../../services/api'
import useUsuario from "../../hooks/useUsuario";
import useNotificacao from "../../hooks/useNotificacao";

export default function Login() {

const [loading, setLoading] = useState(false);
const navigation = useNavigation();
const [buscarOuCriarUsuario] = useUsuario();
const [getExpoToken, buscarNotificacoes, setListeners] = useNotificacao();
var expoPushToken = null;

const config = {
  androidClientId: "549718483476-h5sab8jhvjs5d3pu91a3i2ju6k5tk0kg.apps.googleusercontent.com",
  scopes: ['profile', 'email'],
  androidStandaloneAppClientId:'549718483476-c6l0c0revbrre332ohbuch5kft7eshoj.apps.googleusercontent.com'
    
};



const googleLogin = async () => {
  try {
    setLoading(true)
    const result = await Google.logInAsync(config);
    
    if (result.type === 'success') {
      if(!result.user.email.includes('@hibrido')){
        let accessToken = result.accessToken;
        Alert.alert('Atenção', 'O login com esse domínio de email não está disponível');
        await Google.logOutAsync({accessToken, ...config})
      }else{
      try {
      let usuario =  await buscarOuCriarUsuario(result.user, expoPushToken );
        buscarNotificacoes(usuario.id);
        setListeners(usuario.id);
        navigation.reset({
          routes:[{name:'MainTab'}]
        })
      } catch (error) {
        console.log(error)
        Alert.alert("Atenção", "Houve um problema ao fazer o login");
      }

      }
    }
  } catch (e) {
    console.log(e.message)
  }finally{
    setLoading(false);
  }
}

<<<<<<< HEAD



const pedirPermissoes = () => {
=======
const pedirPermissoes = async () => {
>>>>>>> 142c37a0f4d16743846d67b9e7fa736e66812007
  Permissions.askAsync(Permissions.MEDIA_LIBRARY, Permissions.NOTIFICATIONS);
  expoPushToken = await getExpoToken();
}

useEffect(() => {
  pedirPermissoes();
}, [])

  return (
    <SafeAreaView style={styleDefault.container}>
        <ImageBackground source={image} style={style.image}>
          <Image style={style.icone} source={iconeHibrido}/>
          <View style={style.containerButton}>
              <Text style={[styleDefault.text, style.text]}>Faça o login</Text>
              <Button text='Google' onPress={() => googleLogin()}
              loading={loading} style={{width:'80%'}}></Button>
          </View>
        </ImageBackground>
    </SafeAreaView>
  );
}
