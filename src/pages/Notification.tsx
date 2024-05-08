import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { CONST } from '../CONST';

const DATA = [
  {
    id: 1,
    date: new Date(),
    Title: 'Lorem ipsum',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    date: new Date(),
    Title: 'Sed ',
    message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    date: new Date(),
    Title: 'Ut enim',
    message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export default function Notification({ navigation }) {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Text style={styles.header}>Notification</Text>

      {DATA.map(item => {
        const isExpanded = expandedId === item.id;

        return (
          <TouchableOpacity
            onPress={() => setExpandedId(isExpanded ? null : item.id)}
            style={styles.item}
            key={item.id}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ color: 'black', fontSize:18 , fontWeight:'bold'}}>{item.Title}</Text>
                <View style={{ maxWidth: '90%' }}>
                  <Text numberOfLines={isExpanded ? 0 : 1} style={{ color: 'black', fontSize:18 }}>
                    {item.message}
                  </Text>
                </View>

              </View>

            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>
              {item.date.toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
              })}
            </Text>
          </TouchableOpacity>
        );
      })}
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
