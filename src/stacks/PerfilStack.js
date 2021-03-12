import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Ranking  from '../screens/Ranking/index'
import Perfil from './../screens/Perfil/index';
import PostsUsuario from "../screens/PostsUsuario";


const Stack = createStackNavigator();

export default function PerfilStack() {
  return (
      <Stack.Navigator initialRouteName="Perfil"
        headerMode="none">
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Ranking" component={Ranking} />
        <Stack.Screen name="PostsUsuario" component={PostsUsuario} />
      </Stack.Navigator>
    
  );
}