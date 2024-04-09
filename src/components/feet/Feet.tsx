import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

export default function Feet() {
  return (
    <View style={styles.container}>
      <Text>Feet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.5,
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#999',
  },
});
