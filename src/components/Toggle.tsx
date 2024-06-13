import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';

const Toggle = ({onPress}) => {
  const [isOn, setIsOn] = useState(false);
  const animatedValue = useRef(new Animated.Value(isOn ? 1 : 0)).current;

  const toggleSwitch = () => {
    setIsOn(!isOn);
    Animated.timing(animatedValue, {
      toValue: !isOn ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    onPress();
  };

  const circleStyle = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 20], // Adjust for circle size
        }),
      },
    ],
  };

  return (
    <TouchableOpacity onPress={toggleSwitch}>
      <View style={styles.container}>
        <View style={[styles.track]} />
        <Animated.View
          style={[
            styles.circle,
            circleStyle,
            {backgroundColor: isOn ? 'green' : 'grey'},
          ]}></Animated.View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 45, // Adjust for desired width
    height: 25,
    borderRadius: 15,
    backgroundColor: '#ddd',
  },
  track: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    backgroundColor: 'white',
    borderWidth: 0.25,
  },
  circle: {
    width: 25, // Adjust for circle size
    height: 25,
    borderRadius: 15,
    position: 'absolute',
  },
});

export default Toggle;
