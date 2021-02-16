import React, {useState} from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import image from '../../assets/login.jpeg';
import style from './style'
import styleDefault from '../../util/style'

import Button from '../../components/button/button'

export default function App() {

const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={styleDefault.container}>
      <ImageBackground source={image} style={style.image}>
        <View style={style.containerButton}>
            <Button text='Entrar com Google' onPress={() => console.log('login')}
             loading={loading} style={{margin: '20%', width:'80%'}}></Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
