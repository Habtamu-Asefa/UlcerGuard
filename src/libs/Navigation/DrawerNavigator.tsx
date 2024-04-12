import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Tab from './TabNavigator';
import Profile from '../../pages/Profile';
import Support from '../../pages/Support';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import HowTo from '../../pages/HowTo';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Tab}
        options={{
          headerShown: false,
          drawerIcon: props => (
            <Feather name="home" size={24} color={props.color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Edit Profile"
        component={Profile}
        options={{
          headerShown: false,
          drawerIcon: props => (
            <Feather name="edit" size={24} color={props.color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Change Password"
        component={Tab}
        options={{
          headerShown: false,
          drawerIcon: props => (
            <MaterialIcons name="password" size={24} color={props.color} />
          ),
        }}
      />
      <Drawer.Screen
        name="How to"
        component={HowTo}
        options={{
          headerShown: false,
          drawerIcon: props => (
            <Entypo name="address" size={24} color={props.color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Get Support"
        component={Support}
        options={{
          headerShown: false,
          drawerIcon: props => (
            <Entypo name="help-with-circle" size={24} color={props.color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
