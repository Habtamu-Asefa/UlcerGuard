import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Data = [
  {p: 20, site: 'Toe'},
  {p: 20, site: 'Heel'},
  {p: 20, site: 'Med Met'},
  {p: 20, site: 'Lat Met'},
];

export default function Feet() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Stats</Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
        {Data.map(state => (
          <View style={{flex: 1, alignItems: 'center'}}>
            <View style={styles.box}>
              <Text style={{fontWeight: 'bold', fontSize: 22}}>{state.p}</Text>
              <Text>kPa</Text>
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>{state.site}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    // fontSize: 13,
    // color: 'black',
  },
  box: {
    flex: 1,
    width: 80,
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5EB1BF',
    elevation: 5,
  },
});
