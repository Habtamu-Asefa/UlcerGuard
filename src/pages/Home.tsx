/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {useDrawerStatus} from '@react-navigation/drawer';
import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import RNBluetoothClassic from 'react-native-bluetooth-classic';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ReloadButton from '../components/Reload';
import Toggle from '../components/Toggle';
import Feet from '../components/feet/Feet';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import BleModal from '../components/modal/BleModal';
import parseRTCDate from '../utils/parseRTCDate';
import {socket} from '../utils/socket';

type StateMessageType = 'connect' | 'realtime' | 'syncing' | 'break';

const SmartButton = ({stateMessage, handleStateMessage, writeData}) => {
  switch (stateMessage) {
    case 'realtime':
      return <ReloadButton onPress={writeData} />;
    case 'syncing':
      return (
        <TouchableOpacity
          disabled={true}
          style={{
            backgroundColor: 'grey',
            padding: 10,
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Syncing ...</Text>
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableOpacity
          onPress={() => handleStateMessage('connect')}
          style={{
            backgroundColor: '#00B140',
            padding: 10,
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Connect</Text>
        </TouchableOpacity>
      );
  }
};

export default function Home({navigation}) {
  const isFocused = useIsFocused();
  const isDrawerOpen = useDrawerStatus();
  const [sensor, setSensor] = useState({
    toe: '-',
    heel: '-',
    mt_1: '-',
    mt_5: '-',
    date: new Date(),
  });
  const [stream, setStream] = useState(false);
  const [connectState, setConnectState] = useState(false);
  const [stateMessage, setStateMessage] = useState<StateMessageType>('connect');

  useEffect(() => {
    const handleConnectDevice = async deviceID => {
      const sensorConnection = await RNBluetoothClassic.connectToDevice(
        deviceID,
      );
      setConnectState(sensorConnection);
      if (sensorConnection) {
        handleStateMessage('realtime');
      }
    };
    handleConnectDevice('00:22:06:30:51:7C');
  }, []);

  const handleRealtime = data => {
    setSensor(data);
  };

  const writeData = async () => {
    if (!connectState) {
      console.log('No connection to write data');
      setStateMessage('connect');
      return;
    }
    try {
      const res = await connectState.write('S');
      console.log('Requested stored sensor data: ', res);
    } catch (err) {
      console.error(err);
    }
  };

  const readData = async () => {
    try {
      const response = await connectState.read();

      if (response) {
        const final_response = response.split(',');
        // console.log('Realtime: ', final_response);

        handleRealtime({
          toe: final_response[0],
          mt_5: final_response[1],
          mt_1: final_response[2],
          heel: final_response[3],
          date: parseRTCDate(final_response[4]),
        });

        socket.emit('pressureUpdate', {
          toe: final_response[0],
          mt_5: final_response[1],
          mt_1: final_response[2],
          heel: final_response[3],
          date: parseRTCDate(final_response[4]),
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  setInterval(readData, 2000);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to socket server.');
    });
    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  const handleConnection = () => {
    setConnectState(!connectState);
  };

  const handleStateMessage = message => {
    setStateMessage(() => message);
  };

  // lifeSaveFunction(handleSensor, 1);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'space-between',
      }}>
      <BleModal
        stateMessage={stateMessage}
        handleStateMessage={handleStateMessage}
        handleConnection={handleConnection}
      />
      {isFocused ? (
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      ) : null}
      {isDrawerOpen === 'open' ? (
        <StatusBar backgroundColor={'#00B140'} barStyle={'dark-content'} />
      ) : null}
      <ScrollView>
        <Header navigation={navigation} />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            gap: 5,
          }}>
          <SmartButton
            stateMessage={stateMessage}
            handleStateMessage={handleStateMessage}
            writeData={writeData}
          />
          <View>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Stream</Text>
            <Toggle
              // onPress={handleStream}
              disabled={!connectState}
              handleStateMessage={handleStateMessage}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingRight: 10,
          }}></View>
        <Feet sensor={sensor} />
        <Footer sensor={sensor} handleRealtime={handleRealtime} />
      </ScrollView>
    </View>
  );
}
