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
import notification from '../api/notification';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';

const DATA = [
  {
    id: 1,
    date: new Date(),
    Title: 'Health Alert',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    date: new Date(),
    Title: 'Sed ',
    message:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    date: new Date(),
    Title: 'Ut enim',
    message:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export default function Notification({navigation}) {
  const [expandedId, setExpandedId] = useState(null);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      console.log('Trying to fetch notification.');
      const res = await notification();
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
      <Text style={styles.header}>Notification</Text>
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
            const isExpanded = expandedId === item.id;

            return (
              <TouchableOpacity
                onPress={() => setExpandedId(isExpanded ? null : item.id)}
                style={styles.item}
                key={item.id}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flexDirection: 'column'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      {item.title}
                    </Text>
                    <View>
                      <Text style={{flex: 1 / 3, color: 'black', fontSize: 15}}>
                        {!isExpanded ? item.message.slice(0, 35) : item.message}
                      </Text>
                    </View>
                  </View>
                </View>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
                  {new Date(item.date).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                  })}
                </Text>
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
    paddingBottom: 12,
    color: 'black',
    fontSize: 26,
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
    paddingHorizontal: 15,
    backgroundColor: '#F1F2F3',
    paddingVertical: 24,
    margin: 3,
    borderRadius: 5,
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
