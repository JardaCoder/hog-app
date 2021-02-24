import React, {useState, useEffect} from "react";
import { View, Text, Image, ImageBackground, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Google from 'expo-google-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Permissions from 'expo-permissions';


import image from '../../assets/login.jpeg';
import styleDefault from '../../util/style'

import Button from '../../components/Button/button'
import style from "./style";
import { useNavigation } from "@react-navigation/core";
import mainTab from './../../stacks/MainTab';
import { useUserContext } from "../../contexts/UserContext";
import api from '../../services/api'
import useUsuario from "../../hooks/useUsuario";

export default function Login() {

const [loading, setLoading] = useState(false);
const navigation = useNavigation();
const [buscarOuCriarUsuario] = useUsuario();



const config = {
  androidClientId: "549718483476-h5sab8jhvjs5d3pu91a3i2ju6k5tk0kg.apps.googleusercontent.com",
  scopes: ['profile', 'email'],
  // expoClientId: `<YOUR_WEB_CLIENT_ID>`,
  // iosClientId: `<YOUR_IOS_CLIENT_ID>`,
  // iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
  // androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
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
        await buscarOuCriarUsuario(result.user);
        pedirPermissoes();
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

const pedirPermissoes = () => {
  Permissions.askAsync(Permissions.MEDIA_LIBRARY, Permissions.NOTIFICATIONS);
}


  return (
    <SafeAreaView style={styleDefault.container}>
      <ImageBackground source={image} style={style.image}>
        <View style={style.containerButton}>
            <Text style={[styleDefault.text, style.text]}>Faça o login</Text>
            <Button text='Google' onPress={() => googleLogin()}
             loading={loading} style={{width:'80%'}}></Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
