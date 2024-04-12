import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';

export default function Header({name = 'Bilbil'}) {
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={40}
        source={require('../../../assets/image/patient.png')}
      />
      <Text style={styles.name}>Afternoon, {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
