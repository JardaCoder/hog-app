import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NovoPost from '../screens/NovoPost/index';
import Notificacao from '../screens/Notificacao/index';
import CustomTabBar from '../components/CustomTabBar/index';
import HomeStack from './HomeStack';
import PerfilStack from './PerfilStack';
import PostStack from './PostStack';

const Tab = createBottomTabNavigator();

export default function mainTab() {

return (
    <Tab.Navigator initialRouteName="Home" tabBar={props => <CustomTabBar {...props}/>}
      tabBarOptions={{
        keyboardHidesTabBar:true
      }}
    >
      <Tab.Screen name="Home" component={HomeStack}
      />
      <Tab.Screen name="Post" component={PostStack}
      />
      <Tab.Screen name="NovoPost" component={NovoPost} 
      />
      <Tab.Screen name="Notificacao" component={Notificacao}
      />
      <Tab.Screen name="Perfil" component={PerfilStack}
      />
    </Tab.Navigator>
  );
}
