import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/index'
import Post from '../screens/Post/index';
import NovoPost from '../screens/NovoPost/index';
import Notificacao from '../screens/Notificacao/index';
import Perfil from '../screens/Perfil/index';

import {FontAwesome5, Ionicons, MaterialIcons   } from '@expo/vector-icons';
import CustomTabBar from '../components/CustomTabBar/index';

const Tab = createBottomTabNavigator();

export default function mainTab() {
  const [state, setstate] = useState(0)

return (
    <Tab.Navigator initialRouteName="Home" tabBar={props => <CustomTabBar {...props}/>}>
      <Tab.Screen name="Home" component={Home}
         options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen name="Post" component={Post}
        options={{
          tabBarLabel: 'Posts',
          tabBarIcon: () => (
            <MaterialIcons name="dynamic-feed" size={24} color="black" />
          ),
          
        }}
      />
      <Tab.Screen name="NovoPost" component={NovoPost} 
        options={{
          tabBarLabel: 'Novo post',
          tabBarIcon: () => (
            <Ionicons name="add-outline" size={24} color="black" />
          ),
          
        }}
      />
      <Tab.Screen name="Notificacao" component={Notificacao}
         options={{
          tabBarLabel: 'Notificações',
          tabBarIcon: () => (
            <Ionicons name="notifications-outline" size={24} color="black" />
          ),
          tabBarBadge: state,
          tabBarBadgeStyle:{
            backgroundColor:global.blue
          }
        }}
      />
      <Tab.Screen name="Perfil" component={Perfil}
       options={{
        tabBarLabel: 'Perfil',
        tabBarIcon: () => (
          <FontAwesome5 name="user" size={24} color="black" />
        ),
       }} 
      />
    </Tab.Navigator>
  );
}
