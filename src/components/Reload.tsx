import {MotiView} from 'moti';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Easing} from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ReloadButton = ({onPress}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePress = () => {
    setIsAnimating(true);
    onPress();
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <TouchableOpacity onPress={handlePress} disabled={isAnimating}>
      <MotiView
        from={{rotate: '0deg'}}
        animate={{rotate: isAnimating ? '0deg' : '360deg'}}
        transition={{
          type: 'timing',
          duration: 3000,
          easing: Easing.linear,
        }}>
        <MaterialCommunityIcons name="reload" color="grey" size={35} />
      </MotiView>
    </TouchableOpacity>
  );
};

export default ReloadButton;
