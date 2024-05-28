import {View, Text} from 'react-native';
import React from 'react';
import ReferenceFooter from './ReferenceFooter';
import StatFooter from './StatFooter';

export default function Footer({sensor, handleRealtime}) {
  return (
    <View style={{flex: 1, gap: 10}}>
      <ReferenceFooter />
      <StatFooter sensor={sensor} handleRealtime={handleRealtime} />
    </View>
  );
}
