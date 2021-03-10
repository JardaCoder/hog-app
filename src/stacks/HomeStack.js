import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Ranking  from '../screens/Ranking/index'
import Home from "../screens/Home";
import Post from './../screens/Post/index';
import PostDetalhe from './../screens/PostDetalhe/index';


const Stack = createStackNavigator();

export default function HomeStack() {
  return (
      <Stack.Navigator initialRouteName="Home"
        headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Ranking" component={Ranking} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="PostDetalhe" component={PostDetalhe} />
      </Stack.Navigator>
    
  );
}