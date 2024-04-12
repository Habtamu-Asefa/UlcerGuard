import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/header/Header';
import Feet from '../components/feet/Feet';
import Footer from '../components/footer/Footer';

export default function Home({navigation}) {
  return (
    <ScrollView>
      <View style={{backgroundColor: 'white', flex: 1, padding: 15}}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <Header navigation={navigation} />
        <Feet />
        <Footer />
      </View>
    </ScrollView>
  );
}
