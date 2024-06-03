/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {MotiView} from 'moti';
import {StyleSheet, View} from 'react-native';
import {Easing} from 'react-native-reanimated';

const _color = {red: 'red', yellow: 'yellow', green: 'green', grey: '#999'};
const _size = 20;

function ExpandingCircle({color}) {
  // console.log('color kind: ', color);
  if (true) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: color,
          width: 20,
          height: 20,
          borderRadius: 10,
        }}
      />
    );
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={[styles.center, styles.cirlce]}>
        {[...Array(3).keys()].map(index => {
          return (
            <MotiView
              from={{opacity: 0.9, scale: 1}}
              animate={{opacity: 0, scale: 3}}
              transition={{
                type: 'timing',
                duration: 2000,
                easing: Easing.out(Easing.ease),
                loop: true,
                repeatReverse: false,
              }}
              delay={index * 400}
              key={index}
              style={[
                StyleSheet.absoluteFillObject,
                styles.cirlce,
                {backgroundColor: _color[color]},
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}

// Custom comparison function for React.memo
const areEqual = (prevProps, nextProps) => {
  return prevProps.color === nextProps.color;
};

// Export the component wrapped in React.memo with the custom comparison function
export default React.memo(ExpandingCircle, areEqual);

const styles = StyleSheet.create({
  cirlce: {
    width: _size,
    height: _size,
    borderRadius: _size,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
