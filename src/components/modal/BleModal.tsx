import React, {useState} from 'react';
import {Button, Pressable, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';

function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            flex: 1 / 2,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 15,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <IconF name="bluetooth" size={60} color="green" />
          </View>

          <Pressable
            style={{position: 'absolute', top: 10, right: 10}}
            onPress={toggleModal}>
            <IconM name="cancel" size={30} color="red" />
          </Pressable>

          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 18,
              paddingTop: 10,
            }}>
            Availiable Devices
          </Text>
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;
