import AsyncStorage from '@react-native-community/async-storage';

const storeToken = async token => {
  try {
    await AsyncStorage.setItem('authToken', token);
  } catch (error) {
    console.error('Error storing token:', error);
    // Handle storage errors appropriately (e.g., display error message)
  }
};

export default storeToken;
