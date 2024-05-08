import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {CONST} from '../CONST';
import {TouchableOpacity} from 'react-native';
import signin from '../api/signin';
import {useDispatch} from 'react-redux';
import {storeToken} from '../libs/Redux/features/auth/authSlice';

export default function SignIn({navigation}) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleSignIn = async () => {
    await signin(user);
    console.log('Sign in looks like this: ');
    dispatch(storeToken());
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Text style={styles.title}>ULCER GUARD</Text>
      <TextInput
        mode="outlined"
        label="Phone number"
        placeholder="Phone number"
        inputMode="tel"
        outlineColor="#000"
        activeOutlineColor="#00B140"
        style={styles.input}
        onChangeText={e => setUser(prev => ({...prev, email: e}))}
      />
      <TextInput
        mode="outlined"
        label="Password"
        placeholder="Password"
        outlineColor="#000"
        activeOutlineColor="#00B140"
        style={styles.input}
        onChangeText={e => setUser(prev => ({...prev, password: e}))}
      />

      <View>
        <Button mode="contained" onPress={handleSignIn} style={styles.button}>
          Sign In
        </Button>
        <Pressable>
          <Text style={{color: 'blue', paddingTop: 8, alignSelf: 'center'}}>
            Forgot Password?
          </Text>
        </Pressable>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 8,
          }}>
          <Text style={{color: '#00B140'}}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(CONST.SCREEN.SIGNUP)}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: '#00B140',
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    rowGap: 10,
    paddingTop: Dimensions.get('screen').height * 0.2,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#00B140',
  },
  input: {
    width: Dimensions.get('screen').width * 0.75,
  },
  button: {
    backgroundColor: '#00B140',
    paddingVertical: 3,
    marginTop: 7,
    width: Dimensions.get('screen').width * 0.75,
  },
});
