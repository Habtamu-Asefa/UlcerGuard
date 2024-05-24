import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import RNBluetoothClassic, {
  BluetoothDevice,
  BluetoothEventType,
} from 'react-native-bluetooth-classic';

const Data = [
  {p: 20, site: 'Toe', color: 'green'},
  {p: 20, site: 'Heel', color: 'green'},
  {p: 30, site: 'Med Met', color: 'red'},
  {p: 25, site: 'Lat Met', color: '#F2DC5D'},
];

export default function Feet() {
  const [connectState, setConnectState] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [sensor, setSensor] = useState({toe: 0, heel: 0, mt_1: 0, mt_2: 0});

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
        const final_response = JSON.parse(response);
        setSensor(final_response);
        console.log('Response', final_response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  setInterval(readData, 1000);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Stats</Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
        {/* Toe */}
        <View style={{flex: 1, alignItems: 'center'}}>
          <View
            style={[
              styles.box,
              {
                backgroundColor:
                  sensor.toe > 200
                    ? 'red'
                    : sensor.toe > 70
                    ? 'yellow'
                    : 'green',
              },
            ]}>
            <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
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
                backgroundColor:
                  sensor.heel > 200
                    ? 'red'
                    : sensor.toe > 70
                    ? 'yellow'
                    : 'green',
              },
            ]}>
            <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
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
                backgroundColor:
                  sensor.mt_1 > 200
                    ? 'red'
                    : sensor.toe > 70
                    ? 'yellow'
                    : 'green',
              },
            ]}>
            <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
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
                backgroundColor:
                  sensor.mt_2 > 200
                    ? 'red'
                    : sensor.toe > 70
                    ? 'yellow'
                    : 'green',
              },
            ]}>
            <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
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
