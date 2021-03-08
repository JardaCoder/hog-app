import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Ranking  from '../screens/Ranking/index'
import Home from "../screens/Home";


const Stack = createStackNavigator();

export default function HomeStack() {
  return (
      <Stack.Navigator initialRouteName="Home"
        headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Ranking" component={Ranking} />
      </Stack.Navigator>
    
  );
}