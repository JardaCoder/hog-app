import React, {useEffect} from "react";
import { View, Text } from "react-native";
import MainStack from './src/stacks/MainStack'
import { useFonts } from 'expo-font';

import { UsuarioProvider } from './src/contexts/UserContext';
import { NotificacaoProvider } from './src/contexts/NotificationContext';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [loaded] = useFonts({
    popins: require('./src/assets/fonts/Poppins-Medium.ttf'),
    bold: require('./src/assets/fonts/Poppins-Bold.ttf'),
  });

  const hideSplash = async () =>{
    await  SplashScreen.hideAsync();
  }

  // useEffect(() => {
  //   hideSplash();
  // }, [loaded]);


  return loaded ?
    <UsuarioProvider>
      <NotificacaoProvider>
        <MainStack/>
      </NotificacaoProvider>
    </UsuarioProvider>
  :
    null;
}
