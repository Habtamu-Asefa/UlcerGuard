import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import RNBluetoothClassic, {
  BluetoothDevice,
  BluetoothEventType,
} from 'react-native-bluetooth-classic';
import {Button} from 'react-native-paper';

export default function StatFooter({sensor, handleRealtime}) {
  const [connectState, setConnectState] = useState(false);

  useEffect(() => {
    const handleConnectDevice = async deviceID => {
      console.log('Now we are talking to ', deviceID);
      const sensorConnection = await RNBluetoothClassic.connectToDevice(
        deviceID,
      );
      setConnectState(sensorConnection);
    };
    handleConnectDevice('00:22:06:30:51:7C');
  }, []);

  const readData = async () => {
    // console.log('connect state: ', connectState);
    if (!connectState) return;

    try {
      const response = await connectState.read();

      if (response) {
        const final_response = response.split(',');
        // console.log('Response', final_response);

        handleRealtime({
          toe: final_response[0],
          heel: final_response[1],
          mt_1: final_response[2],
          mt_2: final_response[3],
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  setInterval(readData, 1000);

  const checkColor = value => {
    if (value <= 400) return 'green';
    if (value < 600) return 'yellow';
    if (value >= 600) return 'red';
    return 'grey';
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Stats</Text>
      {/* <Button
        style={{backgroundColor: 'red'}}
        textColor="white"
        onPress={async () => {
          const res = await connectState.write('1');
          console.log('After writing: ', res);
        }}>
        Write
      </Button> */}
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
                color: checkColor(sensor.toe) === 'yellow' ? '#999' : 'white',
              }}>
              {sensor.heel}
            </Text>
            <Text style={{fontSize: 12, color: 'white'}}>kPa</Text>
          </View>
          <Text style={{fontWeight: 'bold', color: '#999', fontSize: 15}}>
            Heel
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
                color: checkColor(sensor.toe) === 'yellow' ? '#999' : 'white',
              }}>
              {sensor.mt_1}
            </Text>
            <Text style={{fontSize: 12, color: 'white'}}>kPa</Text>
          </View>
          <Text style={{fontWeight: 'bold', color: '#999', fontSize: 15}}>
            Met 1
          </Text>
        </View>

        {/* Met 2 */}
        <View style={{flex: 1, alignItems: 'center'}}>
          <View
            style={[
              styles.box,
              {
                backgroundColor: checkColor(sensor.mt_2),
              },
            ]}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                color: checkColor(sensor.mt_2) === 'yellow' ? '#999' : 'white',
              }}>
              {sensor.mt_2}
            </Text>
            <Text style={{fontSize: 12, color: 'white'}}>kPa</Text>
          </View>
          <Text style={{fontWeight: 'bold', color: '#999', fontSize: 15}}>
            Met 2
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
