import React, {useState} from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {CONST} from '../CONST';
import signup from '../api/signup';
import {storeToken, updateProfile} from '../libs/Redux/features/auth/authSlice';

export default function SignUp({navigation}: any) {
  const [user, setUser] = useState({
    firstName: 'Miedan',
    lastName: 'Bizuayehu',
    email: 'mb@gmail.com',
    gender: 'Female',
    dob: '2001',
    height: '1.5',
    weight: '60',
    password: '123456',
  });

  const [showError, setShowError] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSignUp = async () => {
    setLoading(true);
    setShowError('');
    const res = await signup({
      ...user,
      name: user.firstName + ' ' + user.lastName,
    });
    setLoading(false);

    if (res.ok) {
      dispatch(updateProfile(user));
      dispatch(storeToken());
    } else {
      setShowError(res.error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Create Account</Text>
        <TextInput
          mode="outlined"
          label="First Name"
          placeholder="First Name"
          inputMode="tel"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
          onChangeText={e => setUser(prev => ({...prev, firstName: e}))}
        />
        <TextInput
          mode="outlined"
          label="Last Name"
          placeholder="Last Name"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
          onChangeText={e => setUser(prev => ({...prev, lastName: e}))}
        />
        <TextInput
          mode="outlined"
          label="Email"
          placeholder="Email"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
          onChangeText={e => setUser(prev => ({...prev, email: e}))}
        />
        <TextInput
          mode="outlined"
          label="Gender"
          inputMode="numeric"
          placeholder="Gender"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
          onChangeText={e => setUser(prev => ({...prev, gender: e}))}
        />
        <TextInput
          mode="outlined"
          label="Date of Birth"
          inputMode="numeric"
          placeholder="Date of Birth"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
          onChangeText={e => setUser(prev => ({...prev, dob: e}))}
        />
        <TextInput
          mode="outlined"
          label="Height"
          inputMode="numeric"
          placeholder="Height"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
          onChangeText={e => setUser(prev => ({...prev, height: e}))}
        />
        <TextInput
          mode="outlined"
          label="Weight"
          inputMode="numeric"
          placeholder="Weight"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
          onChangeText={e => setUser(prev => ({...prev, weight: e}))}
        />
        <TextInput
          mode="outlined"
          label="Password"
          placeholder="Password"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
          onChangeText={e => setUser(prev => ({...prev, password: e}))}
        />
        <TextInput
          mode="outlined"
          label="Confirm Password"
          placeholder="Confirm Password"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
          onChangeText={e => setUser(prev => ({...prev, password: e}))}
        />
        {showError && (
          <Text
            style={{color: 'red', alignSelf: 'flex-start', paddingLeft: 10}}>
            {showError}
          </Text>
        )}
        <View style={{marginBottom: 20}}>
          <Button
            mode="contained"
            loading={loading}
            onPress={handleSignUp}
            style={styles.button}>
            Sign Up
          </Button>
          <Pressable onPress={() => navigation.navigate(CONST.SCREEN.PASSWORD)}>
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
            <Text>Have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(CONST.SCREEN.SIGNIN)}>
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  color: 'blue',
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',

    alignItems: 'center',
    rowGap: 20,
    paddingTop: Dimensions.get('screen').height * 0.04,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#00B140',
    alignSelf: 'center',
  },
  input: {
    marginTop: 5,
    width: Dimensions.get('screen').width * 0.85,
    height: Dimensions.get('screen').height * 0.06,
  },
  button: {
    backgroundColor: '#00B140',
    paddingVertical: 3,
    marginTop: 30,
    width: Dimensions.get('screen').width * 0.75,
    alignSelf: 'center',
  },
});
