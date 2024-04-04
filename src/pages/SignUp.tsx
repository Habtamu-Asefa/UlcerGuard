import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import {CONST} from '../CONST';

export default function SignUp({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ScrollView>
        <Text style={styles.title}>Create Account</Text>
        <TextInput
          mode="outlined"
          label="First Name"
          placeholder="First Name"
          inputMode="tel"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Last Name"
          placeholder="Last Name"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Gender"
          inputMode="numeric"
          placeholder="Gender"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Age"
          inputMode="numeric"
          placeholder="Age"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Height"
          inputMode="numeric"
          placeholder="Height"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Weight"
          inputMode="numeric"
          placeholder="Weight"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Password"
          placeholder="Password"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Confirm Password"
          placeholder="Confirm Password"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
        />
        <View>
          <Button
            mode="contained"
            onPress={() => navigation.navigate(CONST.SCREEN.SIGNUP)}
            style={styles.button}>
            Sign Up
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
            <Text>Have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(CONST.SCREEN.SIGNIN)}>
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  color: '#00B140',
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
    paddingTop: Dimensions.get('screen').height * 0.1,
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
