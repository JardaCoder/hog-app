import React, {useState, useEffect} from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Google from 'expo-google-app-auth';

import image from '../../assets/login.jpeg';
import style from './style'
import styleDefault from '../../util/style'

import Button from '../../components/button/button'

export default function Login() {

const [loading, setLoading] = useState(false);

const ANDROID_CLIENT_ID = "549718483476-h5sab8jhvjs5d3pu91a3i2ju6k5tk0kg.apps.googleusercontent.com"

const googleLogin = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: ANDROID_CLIENT_ID,
      //iosClientId: YOUR_CLIENT_ID_HERE,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      console.log(result)
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }

}


useEffect(() =>{
  
},[])

  return (
    <SafeAreaView style={styleDefault.container}>
      <ImageBackground source={image} style={style.image}>
        <View style={style.containerButton}>
            <Button text='Entrar com Google' onPress={() => console.log('login')} onPress={() => googleLogin()}
             loading={loading} style={{margin: '20%', width:'80%'}}></Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
