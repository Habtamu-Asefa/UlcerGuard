import {View, StyleSheet, Dimensions, Text} from 'react-native';
import React from 'react';
import FeetSVG from '../../../assets/image/feet.svg';
import ExpandingCircle from '../ExpandingCircle';

export default function Feet() {
  return (
    <View style={styles.container}>
      <FeetSVG style={styles.svg} width={'100%'} height={'100%'} />
      <View style={{position: 'absolute', top: 60, left: 115}}>
        <ExpandingCircle color={'green'} />
      </View>

      <View style={{position: 'absolute', top: 150, left: 50}}>
        <ExpandingCircle color="yellow" />
      </View>
      <View style={{position: 'absolute', top: 125, left: 100}}>
        <ExpandingCircle color="red" />
      </View>
      <View style={{position: 'absolute', top: 240, left: 140}}>
        <ExpandingCircle color="green" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.5,
    marginVertical: 8,
    padding: 10,
    // borderRadius: 8,
    // backgroundColor: '#D7CEB2',
    // elevation: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
    backgroundColor: 'red',
  },
  svg: {
    // backgroundColor: '#999',
    borderRadius: 5,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
