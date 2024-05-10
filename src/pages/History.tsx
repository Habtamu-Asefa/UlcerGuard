import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {CONST} from '../CONST';
import history from '../api/history';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';

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
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      console.log('Trying to fetch history.');
      const res = await history();
      console.log('History in view: ', res);
      setIsLoading(false);

      if (res.ok) {
        setData(res.data);
      }
    };
    fetch();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Text style={styles.header}>History</Text>
      {isLoading ? (
        <ActivityIndicator
          animating={true}
          color={MD2Colors.redA200}
          size={50}
          style={{flex: 1}}
        />
      ) : (
        <ScrollView>
          {data.map(item => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate(CONST.SCREEN.DATA)}
                style={styles.item}
                key={item.id}>
                <View>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
                    {new Date(item.date).toDateString()}
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
        </ScrollView>
      )}
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
