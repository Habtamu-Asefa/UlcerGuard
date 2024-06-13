import React from 'react';
import {Dimensions, StyleSheet, View, useWindowDimensions} from 'react-native';
import FeetSVG from '../../../assets/image/feet.svg';
import ExpandingCircle from '../ExpandingCircle';

export default function Feet({sensor, handleRealtime}) {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  const checkColor = value => {
    if (value <= 400) return 'green';
    if (value < 600) return 'yellow';
    if (value >= 600) return 'red';
    return 'grey';
  };

  return (
    <View style={styles.container}>
      <FeetSVG style={styles.svg} width={'100%'} height={'100%'} />
      <View
        style={{
          position: 'absolute',
          top: height * 0.07,
          left: width * 0.28,
          zIndex: 1,
        }}>
        <ExpandingCircle color={checkColor(sensor.toe)} key={sensor.toe} />
      </View>

      <View
        style={{
          position: 'absolute',
          top: height * 0.19,
          left: width * 0.15,
          zIndex: 1,
        }}>
        <ExpandingCircle color={checkColor(sensor.mt_1)} key={sensor.mt_1} />
      </View>

      <View
        style={{
          position: 'absolute',
          top: height * 0.15,
          left: width * 0.25,
          zIndex: 1,
        }}>
        <ExpandingCircle color={checkColor(sensor.mt_5)} key={sensor.mt_5} />
      </View>

      <View
        style={{
          position: 'absolute',
          top: height * 0.3,
          left: width * 0.35,
          zIndex: 1,
        }}>
        <ExpandingCircle color={checkColor(sensor.heel)} key={sensor.heel} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.5,
    marginVertical: 8,
    padding: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
    backgroundColor: 'red',
  },
  svg: {
    borderRadius: 5,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
