import * as React from "react";
import { View, Text } from "react-native";
import MainStack from './src/stacks/MainStack'
import { useFonts } from 'expo-font';

import { UsuarioProvider } from './src/contexts/UserContext';
import { NotificacaoProvider } from './src/contexts/NotificationContext';

export default function App() {
  const [loaded] = useFonts({
    popins: require('./src/assets/fonts/Poppins-Medium.ttf'),
    bold: require('./src/assets/fonts/Poppins-Bold.ttf'),
  });


  return loaded ?
    <UsuarioProvider>
      <NotificacaoProvider>
        <MainStack/>
      </NotificacaoProvider>
    </UsuarioProvider>
  :
    null;
}
