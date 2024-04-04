import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

function Drawer() {}

export default function AuthScreens() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Drawer" component={Drawer} />
    </RootStack.Navigator>
  );
}
