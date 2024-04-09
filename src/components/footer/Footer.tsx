import {View, Text} from 'react-native';
import React from 'react';
import ReferenceFooter from './ReferenceFooter';
import StatFooter from './StatFooter';

export default function Footer() {
  return (
    <View style={{flex: 1}}>
      <ReferenceFooter />
      <StatFooter />
    </View>
  );
}
