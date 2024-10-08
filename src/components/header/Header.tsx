import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {useSelector} from 'react-redux';

export default function Header({name = 'Miedan', navigation}) {
  const user = useSelector(state => state.auth.profile);

  // say afternoon or morning or evening based on the current time
  const time = new Date().getHours();
  const timeOfDay = time < 12 ? 'morning' : time < 18 ? 'afternoon' : 'evening';

  const greeting = `Good ${timeOfDay},`;
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Avatar.Image
          size={40}
          source={require('../../../assets/image/starynight.webp')}
        />
      </Pressable>

      <Text style={styles.name}>{greeting}</Text>
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
