import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CONST} from '../../CONST';
import Home from '../../pages/Home';
import History from '../../pages/History';
import Blogs from '../../pages/Blogs';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={CONST.SCREEN.HOME}
        component={Home}
        options={{
          tabBarIcon: props => (
            <Feather name="home" size={24} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name={CONST.SCREEN.HISTORY}
        component={History}
        options={{
          tabBarIcon: props => (
            <FontAwesome name="history" size={24} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name={CONST.SCREEN.BLOGS}
        component={Blogs}
        options={{
          tabBarIcon: props => (
            <Ionicons name="newspaper" size={24} color={props.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
