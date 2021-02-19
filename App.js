import * as React from "react";
import { View, Text } from "react-native";
import MainStack from './src/stacks/MainStack'
import { useFonts } from 'expo-font';

import { UsuarioProvider } from './src/contexts/UserContext';

export default function App() {
  const [loaded] = useFonts({
    popins: require('./src/assets/fonts/Poppins-Medium.ttf')
  });


  return loaded ?
    <UsuarioProvider>
      <MainStack/>
    </UsuarioProvider>
  :
    null;
}
