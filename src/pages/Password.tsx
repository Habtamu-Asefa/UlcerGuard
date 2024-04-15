import {
    View,
    Text,
    StyleSheet,
    Dimensions,
  } from 'react-native';
  import React from 'react';
  import {Button, TextInput} from 'react-native-paper';
  import {CONST} from '../CONST';
  
  export default function Password({navigation}) {
    return (
      <View style={styles.container}>
        
          <Text style={styles.title}>Change Password</Text>
          <TextInput
            mode="outlined"
            label="Current  Password"
            placeholder="Current Password"
            secureTextEntry={true}
            outlineColor="#999"
            activeOutlineColor="#00B140"
            style={styles.input}
          />
          
          <TextInput
            mode="outlined"
            label="New  Password"
            placeholder="New Password"
            secureTextEntry={true}
            outlineColor="#999"
            activeOutlineColor="#00B140"
            style={styles.input}
          />

        <TextInput
            mode="outlined"
            label="Confirm  Password"
            placeholder="Confirm Password"
            secureTextEntry={true}
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
    
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:25,
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
  