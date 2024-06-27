import React, {useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RNBluetoothClassic from 'react-native-bluetooth-classic';
import Modal from 'react-native-modal';
import {PERMISSIONS, request} from 'react-native-permissions';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';

function ModalTester({stateMessage, handleConnection, handleStateMessage}) {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const requestBluetoothPermission = async () => {
      if (Platform.OS === 'android') {
        if (Platform.Version >= 31) {
          // Android 12+
          const granted = await request(PERMISSIONS.ANDROID.BLUETOOTH_CONNECT);
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Bluetooth connect permission denied');
            return;
          }
        } else {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADMIN,
          );
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Bluetooth admin permission denied');
            return;
          }
        }
      }
      initializeBluetooth();
    };

    const initializeBluetooth = async () => {
      try {
        let isEnabled = await RNBluetoothClassic.isBluetoothEnabled();
        if (!isEnabled) {
          await RNBluetoothClassic.requestBluetoothEnabled();
        }
        let bonded = await RNBluetoothClassic.getBondedDevices();
        // console.log('Bonded devices: ', bonded);
        setDevices(bonded);
      } catch (error) {
        console.error('Error initializing Bluetooth: ', error);
      }
    };

    requestBluetoothPermission();

    return () => {
      // Cleanup if necessary
    };
  }, []);

  const handleConnectDevice = async deviceID => {
    try {
      console.log('device id: ', deviceID);
      const connectState = await RNBluetoothClassic.connectToDevice(deviceID);
      const isConnected = await RNBluetoothClassic.isDeviceConnected(deviceID);
      console.log('Connected to ', deviceID, connectState);

      if (isConnected) {
        handleConnection(connectState);
        handleStateMessage('realtime');
      }
    } catch (error) {
      console.error('Error connecting to device: ', error);
    }
  };

  return (
    <View>
      <Modal isVisible={false}>
        <View
          style={{
            flex: 1 / 2,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 10,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => handleStateMessage('break')}
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              zIndex: 1,
            }}>
            <IconM name="cancel" size={30} color="#999" />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center',
              gap: 5,
              paddingTop: 10,
              paddingBottom: 5,
            }}>
            <IconF name="bluetooth" size={25} color="#0082FC" />
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Available Devices
            </Text>
          </View>
          <ScrollView>
            {devices.length === 0 ? (
              <View
                style={{
                  flex: 1,
                  borderRadius: 20,
                  padding: 25,
                  margin: 10,
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#999'}}>
                  No Bluetooth device available to connect.
                </Text>
              </View>
            ) : (
              devices.map(device => (
                <Pressable
                  key={device.id}
                  onPress={() => handleConnectDevice(device.id)}
                  style={{
                    width: 300,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'grey',
                    marginTop: 5,
                    borderRadius: 10,
                  }}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>
                    {device.name}
                  </Text>
                </Pressable>
              ))
            )}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;
