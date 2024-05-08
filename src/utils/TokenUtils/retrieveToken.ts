import AsyncStorage from '@react-native-community/async-storage';

const retrieveToken = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    return token;
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null; // Or handle errors as needed
  }
};

export default retrieveToken;
