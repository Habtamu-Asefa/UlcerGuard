import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../pages/Home';

const RootStack = createNativeStackNavigator();

export default function AuthScreens() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
}
