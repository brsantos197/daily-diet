import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from '@screens/Home';
import { Statistics } from '@screens/Statistics';
import { NewSnack } from '@screens/NewSnack';

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name='home'
        component={Home}
      />
      <Screen 
        name='statistics'
        component={Statistics}
      />
      <Screen 
        name='newsnack'
        component={NewSnack}
      />
    </Navigator>
  );
}
