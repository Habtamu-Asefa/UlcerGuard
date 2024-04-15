import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';

export default function Header({name = 'Miedan', navigation}) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Avatar.Image   
        size={40}
        source={require('../../../assets/image/patient.png')} 
        />
      </Pressable>

      <Text style={styles.name}>Afternoon, {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 5,
    borderRadius: 10,
  },
});
