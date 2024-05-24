import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import FeetSVG from '../../../assets/image/feet.svg';
import ExpandingCircle from '../ExpandingCircle';

export default function Feet() {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  return (
    <View style={styles.container}>
      <FeetSVG style={styles.svg} width={'100%'} height={'100%'}></FeetSVG>
      <View
        style={{
          position: 'absolute',
          top: height * 0.07,
          left: width * 0.28,
          zIndex: 1,
        }}>
        <ExpandingCircle color={'green'} />
      </View>

      <View
        style={{
          position: 'absolute',
          top: height * 0.19,
          left: width * 0.15,
          zIndex: 1,
        }}>
        <ExpandingCircle color="yellow" />
      </View>
      <View
        style={{
          position: 'absolute',
          top: height * 0.15,
          left: width * 0.25,
          zIndex: 1,
        }}>
        <ExpandingCircle color="red" />
      </View>
      <View
        style={{
          position: 'absolute',
          top: height * 0.3,
          left: width * 0.35,
          zIndex: 1,
        }}>
        <ExpandingCircle color="green" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.5,
    marginVertical: 8,
    padding: 10,
    // borderRadius: 8,
    // backgroundColor: '#D7CEB2',
    // elevation: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
    backgroundColor: 'red',
  },
  svg: {
    // backgroundColor: '#999',
    borderRadius: 5,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
