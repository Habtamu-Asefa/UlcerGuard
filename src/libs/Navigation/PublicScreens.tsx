import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import {CONST} from '../../CONST';
import OnBoarding from '../../pages/OnBoarding';
import Blog from '../../pages/Blog';

const Stack = createNativeStackNavigator();

export default function PublicScreens() {
  return (
    <Stack.Navigator initialRouteName={CONST.SCREEN.ONBOARDING}>
      <Stack.Screen
        name={CONST.SCREEN.SIGNIN}
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={CONST.SCREEN.SIGNUP}
        component={SignUp}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={CONST.SCREEN.ONBOARDING}
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={CONST.SCREEN.BLOG}
        component={Blog}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
