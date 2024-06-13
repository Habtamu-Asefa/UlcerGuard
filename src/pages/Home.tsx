/* eslint-disable react-native/no-inline-styles */
import {useDrawerStatus} from '@react-navigation/drawer';
import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import Toggle from '../components/Toggle';
import Feet from '../components/feet/Feet';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import BleModal from '../components/modal/BleModal';
import {socket} from '../utils/socket';

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

  const handleRealtime = data => {
    setSensor(data);
  };

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server with ID:', socket.id);
    });
    return () => {
      socket.off('connect');
      socket.off('pressureUpdate');
      socket.off('disconnect');
    };
  }, []);

  useEffect(() => {
    if (!stream) return;
    socket.emit('pressureUpdate', sensor);
    return () => {
      socket.off('pressureUpdate');
    };
  }, [sensor, stream]);

  // setInterval(() => {
  //   const pressure = generatePressureReading();
  //   setSensor(pressure);
  // }, 5000);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'space-between',
      }}>
      <BleModal />
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
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 5,
          }}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Stream</Text>
          <Toggle onPress={() => setStream(!stream)} />
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
