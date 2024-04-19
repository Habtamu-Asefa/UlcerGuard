import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {CONST} from '../CONST';

const DATA = [
  {
    id: 1,
    date: new Date(),
    state: 'green',
    mean: 20,
  },
  {
    id: 2,
    date: new Date(),
    state: 'red',
    mean: 35,
  },
  {
    id: 3,
    date: new Date(),
    state: 'green',
    mean: 19,
  },
  {
    id: 4,
    date: new Date(),
    state: 'green',
    mean: 20,
  },
  {
    id: 5,
    date: new Date(),
    state: 'yellow',
    mean: 25,
  },
];

export default function History({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Text style={styles.header}>History</Text>

      {DATA.map(item => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(CONST.SCREEN.DATA)}
            style={styles.item}
            key={item.id}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
                {item.date.toDateString()}
              </Text>
              <Text style={{}}>Mean Pressure: {item.mean}</Text>
            </View>
            <View
              style={{
                backgroundColor: item.state,
                width: 10,
                height: 10,
                borderRadius: 5,
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 10,
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 15,
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#CEEAF7',
    paddingVertical: 25,
    margin: 3,
    borderRadius: 5,
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
