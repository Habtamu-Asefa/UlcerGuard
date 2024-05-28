import {View, Text, StatusBar, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/header/Header';
import Feet from '../components/feet/Feet';
import Footer from '../components/footer/Footer';
import {useIsFocused} from '@react-navigation/native';
import {useDrawerStatus} from '@react-navigation/drawer';
import signup from '../api/signup';
import {CONST} from '../CONST';
import BleModal from '../components/modal/BleModal';

export default function Home({navigation}) {
  const isFocused = useIsFocused();
  const isDrawerOpen = useDrawerStatus();
  const [sensor, setSensor] = useState({
    toe: '-',
    heel: '-',
    mt_1: '-',
    mt_2: '-',
  });
  const handleRealtime = data => {
    console.log('handle realtime update: ', data);
    setSensor(data);
  };

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
        <Feet sensor={sensor} />
        <Footer sensor={sensor} handleRealtime={handleRealtime} />
      </ScrollView>
    </View>
  );
}
