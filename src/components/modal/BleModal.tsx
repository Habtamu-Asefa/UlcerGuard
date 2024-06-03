import React, {useEffect, useState} from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import RNBluetoothClassic, {
  BluetoothDevice,
  BluetoothEventType,
} from 'react-native-bluetooth-classic';

function ModalTester() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [devices, setDevices] = useState([{}]);

  // console.log('Devices list: ', devices);

  useEffect(() => {
    const bluetooth = async () => {
      const available = await RNBluetoothClassic.isBluetoothAvailable();
      const enabled = await RNBluetoothClassic.isBluetoothEnabled();

      const connected = await RNBluetoothClassic.getConnectedDevices();
      let bonded = await RNBluetoothClassic.getBondedDevices();

      setIsModalVisible(connected);
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
    setIsModalVisible(!isModalVisible);
  };

  let isConnected;
  let connectState;

  const handleConnectDevice = async deviceID => {
    connectState = await RNBluetoothClassic.connectToDevice(deviceID);
    isConnected = await RNBluetoothClassic.isDeviceConnected(deviceID);
    console.log('Connected to ', deviceID, ' ', isConnected);
  };

  return (
    <View>
      <Modal isVisible={isModalVisible}>
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
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              zIndex: 1,
            }}
            onPress={toggleModal}>
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
              Availiable Devices
            </Text>
          </View>

          {devices.length == 0 ? (
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
                No bluetooth device available to connect.
              </Text>
            </View>
          ) : (
            // <ScrollView>
            // {
            devices.map(device => (
              <Pressable
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
                <Text style={{color: 'white', fontWeight: 15}}>
                  {device.name}
                </Text>
              </Pressable>
            ))
            // }
            // {/* </ScrollView> */}
          )}
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;
