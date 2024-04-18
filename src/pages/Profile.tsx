import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  
} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import {CONST} from '../CONST';
// import Header from '../components/header/Header';
// import {useState} from 'react';

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
    
      <ScrollView>
        <Text style={styles.title}>Edit your profile</Text>
        <TextInput
          mode="outlined"
          label="Name"
          placeholder="Name"
          inputMode="tel"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
        />
        
        <TextInput
          mode="outlined"
          label="Gender"
          inputMode="numeric"
          placeholder="Gender"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Age"
          inputMode="numeric"
          placeholder="Age"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Height(m)"
          inputMode="numeric"
          placeholder="Height"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Weight(KG)"
          inputMode="numeric"
          placeholder="Weight"
          outlineColor="#999"
          activeOutlineColor="#00B140"
          style={styles.input}
        />
      
        <View>
          <Button
            mode="contained"
            onPress={() => navigation.navigate(CONST.SCREEN.HOME)}
            style={styles.button}>
            Save
          </Button>
      
          <View

            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 8,
            }}>
            
            
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60,
    paddingHorizontal: 25,
    rowGap: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: '100',
    color: 'black', 
    paddingBottom:10,
  },
  input: {
    marginTop: 5,
    width: Dimensions.get('screen').width * 0.85,
    height: Dimensions.get('screen').height * 0.06,
  },
  button: {
    backgroundColor: '#00B140',
    paddingVertical: 3,
    marginTop: 30,
    width: Dimensions.get('screen').width * 0.75,
    alignSelf: 'center',
    borderRadius: 10,
  },
});
