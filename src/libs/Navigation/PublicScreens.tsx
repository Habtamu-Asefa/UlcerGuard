import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import {CONST} from '../../CONST';
import OnBoarding from '../../pages/OnBoarding';
import {useSelector} from 'react-redux';
import Password from '../../pages/Password';

const Stack = createNativeStackNavigator();

export default function PublicScreens() {
  const firstTime = useSelector(state => state.auth.firstTime);
  return (
    <Stack.Navigator initialRouteName={CONST.SCREEN.ONBOARDING}>
      {firstTime && (
        <Stack.Screen
          name={CONST.SCREEN.ONBOARDING}
          component={OnBoarding}
          options={{headerShown: false}}
        />
      )}
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
        name={CONST.SCREEN.PASSWORD}
        component={Password}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
