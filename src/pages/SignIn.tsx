import React, {useState} from 'react';
import {
  Dimensions,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {CONST} from '../CONST';
import signin from '../api/signin';
import {storeToken} from '../libs/Redux/features/auth/authSlice';

export default function SignIn({navigation}) {
  const [user, setUser] = useState({
    email: 'nazrihabtish@gmail.com',
    password: '123456',
  });
  const [showError, setShowError] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSignIn = async () => {
    setLoading(true);
    setShowError('');
    const res = await signin(user);
    setLoading(false);
    setShowError(res.error);
    console.log('res: ', res);
    if (res.ok) {
      dispatch(storeToken());
    }
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
      {showError && (
        <Text style={{color: 'red', alignSelf: 'flex-start', paddingLeft: 50}}>
          {showError}
        </Text>
      )}

      <View>
        <Button
          mode="contained"
          onPress={handleSignIn}
          loading={loading}
          style={styles.button}>
          Sign In
        </Button>
        <Pressable>
          <Text style={{color: 'blue', paddingTop: 30, alignSelf: 'center'}}>
            Forgot Password?
          </Text>
        </Pressable>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 12,
          }}>
          <Text style={{color: 'black'}}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(CONST.SCREEN.SIGNUP)}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: 'blue',
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
    width: Dimensions.get('screen').width * 0.85,
    height: 60,
  },
  button: {
    backgroundColor: '#00B140',
    paddingVertical: 8,
    marginTop: 7,
    width: Dimensions.get('screen').width * 0.75,
  },
});
