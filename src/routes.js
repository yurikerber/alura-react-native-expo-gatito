import react from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Servicos from './screens/Servicos';
import Carrinho from './screens/Carrinho';

import { cores } from './styles'

const Tab = createBottomTabNavigator();

export default function Routes() {
  return <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: cores.roxo,
        tabBarInactiveTintColor: cores.claro,
        tabBarActiveBackgroundColor: cores.roxo,
        tabBarInactiveBackgroundColor: cores.laranja,
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 16,
          height: '90%',
          width: '100%',
          backgroundColor: cores.laranja,
        },
        tabBarStyle: {
          width: '100%',
          height: 80,
          lineHeight: 21,
        },
        headerShown: false
      }}>
      <Tab.Screen name="Serviços" component={Servicos} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
    </Tab.Navigator>
  </NavigationContainer >
}