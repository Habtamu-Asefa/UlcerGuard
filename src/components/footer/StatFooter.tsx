import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Data = [
  {p: 20, site: 'Toe', color: 'green'},
  {p: 20, site: 'Heel', color: 'green'},
  {p: 30, site: 'Med Met', color: 'red'},
  {p: 25, site: 'Lat Met', color: '#F2DC5D'},
];

export default function Feet() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Stats</Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
        {Data.map(state => (
          <View style={{flex: 1, alignItems: 'center'}}>
            <View style={[styles.box, {backgroundColor: state.color}]}>
              <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
                {state.p}
              </Text>
              <Text style={{fontSize: 12, color: 'white'}}>kPa</Text>
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
    justifyContent: 'flex-end',
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
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#1B2CC1',
    elevation: 5,
  },
});
