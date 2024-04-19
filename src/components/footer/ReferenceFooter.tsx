/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Boxes = [
  {color: 'red', note: 'Danger'},
  {color: 'yellow', note: 'Moderate'},
  {color: 'green', note: 'Safe'},
];
const Box = ({color}: {color: string}) => (
  <View>
    <View style={[{backgroundColor: color}, styles.rectangle]} />
  </View>
);

export default function ReferenceFooter() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Level of Exposure</Text> */}
      <View style={{flex: 1, flexDirection: 'row', paddingTop: 10}}>
        {Boxes.map(item => (
          <View style={{flex: 1, flexDirection: 'row', gap: 5}}>
            <Box color={item.color} key={item.color} />
            <Text style={{color: 'black'}}>{item.note}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 / 4,
    backgroundColor: 'white',
    // elevation: 5,
    borderRadius: 5,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'black',
  },
  rectangle: {
    width: 25,
    height: 15,
  },
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
