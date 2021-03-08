import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Ranking  from '../screens/Ranking/index'
import Post from './../screens/Post/index';
import PostDetalhe from './../screens/PostDetalhe/index';


const Stack = createStackNavigator();

export default function PostStack() {
  return (
      <Stack.Navigator initialRouteName="Home"
        headerMode="none">
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="PostDetalhe" component={PostDetalhe} />
      </Stack.Navigator>
    
  );
}