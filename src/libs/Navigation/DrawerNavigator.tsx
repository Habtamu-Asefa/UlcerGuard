/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {DrawerItemList, createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, Text} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {CONST} from '../../CONST';
import HowTo from '../../pages/HowTo';
import Notification from '../../pages/Notification';
import Password from '../../pages/Password';
import Profile from '../../pages/Profile';
import Support from '../../pages/Support';
import {clearProfile, clearToken} from '../Redux/features/auth/authSlice';
import Tab from './TabNavigator';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const user = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const signoutAlert = () =>
    Alert.alert('Sign out?', 'Do you really want to sign out?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(clearProfile());
          dispatch(clearToken());
          return;
        },
      },
    ]);
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <>
          <TouchableOpacity
            onPress={() => props.navigation.navigate(CONST.SCREEN.PROFILE)}
            style={{
              height: 100,
              backgroundColor: '#00B140',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 10,
              padding: 10,
            }}>
            <Avatar.Image
              size={60}
              source={require('../../../assets/image/starynight.webp')}
            />
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                {user.profile?.firstName +
                  ' ' +
                  user.profile?.lastName?.slice(0, 1)}
                .
              </Text>
              <Text style={{color: 'white', fontSize: 16}}>
                {user.profile?.email}
              </Text>
            </View>
          </TouchableOpacity>
          <DrawerItemList {...props} />
          <TouchableOpacity onPress={signoutAlert}>
            <Text
              style={{
                color: 'red',
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 30,
                alignSelf: 'center',
              }}>
              Sign out
            </Text>
          </TouchableOpacity>
        </>
      )}
      screenOptions={{
        drawerStatusBarAnimation: 'slide',
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#00B140',
        drawerAllowFontScaling: true,
      }}>
      <Drawer.Screen
        name={CONST.SCREEN.HOME}
        component={Tab}
        options={{
          headerShown: false,
          drawerIcon: props => (
            <Feather name="home" size={24} color={props.color} />
          ),
        }}
      />
      <Drawer.Screen
        name={CONST.SCREEN.NOTIFICATION}
        component={Notification}
        options={{
          headerShown: false,
          drawerIcon: props => (
            <Feather name="bell" size={24} color={props.color} />
          ),
        }}
      />
      <Drawer.Screen
        name={CONST.SCREEN.PROFILE}
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
        component={Password}
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

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00B140',
    paddingVertical: 3,
    marginTop: 30,
    width: Dimensions.get('screen').width * 0.75,
    alignSelf: 'center',
  },
});
