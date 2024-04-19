import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CONST} from '../../CONST';
import DrawerNavigator from './DrawerNavigator';
import Blog from '../../pages/Blog';
import Data from '../../pages/Data';

const RootStack = createNativeStackNavigator();

export default function AuthScreens() {
  return (
    <RootStack.Navigator initialRouteName={CONST.SCREEN.HOME}>
      <RootStack.Screen
        name={'Drawer'}
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name={CONST.SCREEN.BLOG}
        component={Blog}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name={CONST.SCREEN.HISTORY}
        component={Data}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}
