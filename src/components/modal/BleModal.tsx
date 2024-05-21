import React, {useEffect, useState} from 'react';
import {Button, Pressable, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import RNBluetoothClassic, {
  BluetoothDevice,
  BluetoothEventType,
} from 'react-native-bluetooth-classic';

function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(true);
  const [devices, setDevices] = useState([]);

  console.log('Devices list: ', devices);

  useEffect(() => {
    const bluetooth = async () => {
      const av = await RNBluetoothClassic.isBluetoothAvailable();
      const enabled = await RNBluetoothClassic.isBluetoothEnabled();
      const paired = await RNBluetoothClassic.getBondedDevices();
      const connected = await RNBluetoothClassic.getConnectedDevices();
      let bonded = await RNBluetoothClassic.getBondedDevices();

      setDevices([...bonded]);

      // console.log('Bluetooth state: ', av);
      // console.log('Bluetooth enabled: ', enabled);
      // console.log('Bluetooth paired: ', paired);
      // console.log('Bluetooth connected: ', connected);
      // console.log('Bluetooth bonded: ', bonded);
    };
    bluetooth();
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  let isConnected;

  const handleConnectDevice = async deviceID => {
    console.log('now we are talking', deviceID);
    const connectState = await RNBluetoothClassic.connectToDevice(deviceID);
    console.log('Connect state: ', connectState);
    isConnected = await RNBluetoothClassic.isDeviceConnected(
      '00:22:06:30:51:7C',
    );
    // console.log('Data availiable: ', await connectState.available());

    console.log('Connected to ', deviceID, ' ', isConnected);
  };
  useEffect(() => {
    const dataFromSensor = async () => {
      await RNBluetoothClassic.onDeviceRead('00:22:06:30:51:7C', data => {
        return console.log('Data from the sensor: ', data);
      });
    };

    dataFromSensor();
  }, [isConnected]);

  return (
    <View>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            flex: 1 / 2,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 15,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <IconF name="bluetooth" size={60} color="green" />
          </View>

          <Pressable
            style={{position: 'absolute', top: 10, right: 10}}
            onPress={toggleModal}>
            <IconM name="cancel" size={30} color="red" />
          </Pressable>

          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 18,
              paddingTop: 10,
            }}>
            Availiable Devices
          </Text>
          {devices.map(device => {
            return (
              <Pressable
                onPress={() => handleConnectDevice(device.id)}
                style={{
                  flex: 1 / 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#999',
                  marginTop: 5,
                  borderRadius: 10,
                }}>
                <Text style={{color: 'white', fontWeight: 15}}>
                  {device.name}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;
