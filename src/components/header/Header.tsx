import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import {useSelector} from 'react-redux';

export default function Header({name = 'Miedan', navigation}) {
  const user = useSelector(state => state.profile);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Avatar.Image
          size={40}
          source={require('../../../assets/image/patient.png')}
        />
      </Pressable>

      <Text style={styles.name}>Afternoon, {user.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#00B140',
    padding: 10,
    // elevation: 5,
    borderRadius: 10,
  },
});
