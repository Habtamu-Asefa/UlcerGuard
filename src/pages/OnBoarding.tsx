import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  StatusBar,
} from 'react-native';
import {Button} from 'react-native-paper';
import React from 'react';
import {CONST} from '../CONST';

const OnBoarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require('../../assets/image/background.jpg')}
        style={styles.image}>
        <View style={styles.filter} />
        <Text style={styles.title}>ULCER GUARD</Text>
        <Text style={styles.subtitle}>
          Monitorng pressure and protecting feet
        </Text>
        <View style={styles.contain}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate(CONST.SCREEN.SIGNIN)}
            style={[styles.button, {backgroundColor: 'white'}]}>
            <Text style={{color: 'green', fontSize: 20, fontWeight: 'bold'}}>
              Sign In
            </Text>
          </Button>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate(CONST.SCREEN.SIGNUP)}
            style={[styles.button, {borderColor: 'white'}]}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              Sign Up
            </Text>
          </Button>
        </View>
        <Text
          style={{
            textAlign: 'center',
            width: 230,
            paddingTop: 20,
            color: 'white',
          }}>
          By using Ulcer Guard you agree to our{' '}
          <Text style={{color: 'blue'}}>Terms of Service </Text>
          and <Text style={{color: 'blue'}}>Privacy Policys</Text>
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00B140',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 10,
    borderRadius: 12,
    marginBottom: 6,
    width: Dimensions.get('screen').width * 0.85,
  },
  contain: {
    paddingTop: 120,
  },
  title: {
    paddingBottom: 8,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    width: 270,
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  filter: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#00B140',
    opacity: 0.5,
  },
});

export default OnBoarding;
