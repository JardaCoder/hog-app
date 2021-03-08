import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Ranking  from '../screens/Ranking/index'
import Perfil from './../screens/Perfil/index';


const Stack = createStackNavigator();

export default function PerfilStack() {
  return (
      <Stack.Navigator initialRouteName="Perfil"
        headerMode="none">
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Ranking" component={Ranking} />
      </Stack.Navigator>
    
  );
}