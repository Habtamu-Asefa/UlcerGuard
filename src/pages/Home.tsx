import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/header/Header';
import Feet from '../components/feet/Feet';
import Footer from '../components/footer/Footer';
import {useIsFocused} from '@react-navigation/native';
import {useDrawerStatus} from '@react-navigation/drawer';

export default function Home({navigation}) {
  const isFocused = useIsFocused();
  const isDrawerOpen = useDrawerStatus();

  return (
    <View
      style={{
        backgroundColor: '#E7ECEF',
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
      }}>
      {isFocused ? (
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      ) : null}
      {isDrawerOpen === 'open' ? (
        <StatusBar backgroundColor={'#00B140'} barStyle={'dark-content'} />
      ) : null}
      <ScrollView>
        <Header navigation={navigation} />
        <Feet />
        <Footer />
      </ScrollView>
    </View>
  );
}
