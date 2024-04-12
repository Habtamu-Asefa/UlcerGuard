import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CONST} from '../../CONST';
import DrawerNavigator from './DrawerNavigator';

const RootStack = createNativeStackNavigator();

export default function AuthScreens() {
  return (
    <RootStack.Navigator initialRouteName={CONST.SCREEN.HOME}>
      <RootStack.Screen
        name={'Drawer'}
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}
