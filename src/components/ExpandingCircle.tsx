/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {MotiView} from 'moti';
import {StyleSheet, View} from 'react-native';
import {Easing} from 'react-native-reanimated';
const _color = {red: 'red', yellow: 'yellow', green: 'green'};
const _size = 20;
export default function ExpandingCircle({color}) {
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
