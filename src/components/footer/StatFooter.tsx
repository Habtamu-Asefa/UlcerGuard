import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function StatFooter({sensor}) {
  const checkColor = value => {
    if (value <= 150) return 'green';
    if (value < 199) return 'yellow';
    if (value >= 200) return 'red';
    return 'grey';
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        {/* Toe */}
        <View style={{flex: 1, alignItems: 'center'}}>
          <View
            style={[
              styles.box,
              {
                backgroundColor: checkColor(sensor.toe),
              },
            ]}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                color: checkColor(sensor.toe) === 'yellow' ? '#999' : 'white',
              }}>
              {sensor.toe}
            </Text>
            <Text style={{fontSize: 12, color: 'white'}}>kPa</Text>
          </View>
          <Text style={{fontWeight: 'bold', color: '#999', fontSize: 15}}>
            Toe
          </Text>
        </View>

        {/* Met 1 */}
        <View style={{flex: 1, alignItems: 'center'}}>
          <View
            style={[
              styles.box,
              {
                backgroundColor: checkColor(sensor.mt_1),
              },
            ]}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                color: checkColor(sensor.mt_1) === 'yellow' ? '#999' : 'white',
              }}>
              {sensor.mt_1}
            </Text>
            <Text style={{fontSize: 12, color: 'white'}}>kPa</Text>
          </View>
          <Text style={{fontWeight: 'bold', color: '#999', fontSize: 15}}>
            Met 1
          </Text>
        </View>

        {/* Met 5 */}
        <View style={{flex: 1, alignItems: 'center'}}>
          <View
            style={[
              styles.box,
              {
                backgroundColor: checkColor(sensor.mt_5),
              },
            ]}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                color: checkColor(sensor.mt_5) === 'yellow' ? '#999' : 'white',
              }}>
              {sensor.mt_5}
            </Text>
            <Text style={{fontSize: 12, color: 'white'}}>kPa</Text>
          </View>
          <Text style={{fontWeight: 'bold', color: '#999', fontSize: 15}}>
            Met 5
          </Text>
        </View>

        {/* Heel */}

        <View style={{flex: 1, alignItems: 'center'}}>
          <View
            style={[
              styles.box,
              {
                backgroundColor: checkColor(sensor.heel),
              },
            ]}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                color: checkColor(sensor.heel) === 'yellow' ? '#999' : 'white',
              }}>
              {sensor.heel}
            </Text>
            <Text style={{fontSize: 12, color: 'white'}}>kPa</Text>
          </View>
          <Text style={{fontWeight: 'bold', color: '#999', fontSize: 15}}>
            Heel
          </Text>
        </View>
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
