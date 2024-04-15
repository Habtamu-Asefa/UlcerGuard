import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export default function ExpandingCircle({color}) {
  const width = useSharedValue(0);
  const style = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: width.value,
      borderRadius: width.value / 2,
    };
  });
  const OFFSET = 30;
  useEffect(() => {
    width.value = withRepeat(withTiming(OFFSET), 0, true);
  }, []);
  return <Animated.View style={[{backgroundColor: color}, style]} />;
}
