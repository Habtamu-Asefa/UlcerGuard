import AsyncStorage from '@react-native-community/async-storage';

// Function to store data in AsyncStorage
const handleStore = async data => {
  try {
    const existingData = await AsyncStorage.getItem('storedData');
    let jsonData = existingData ? JSON.parse(existingData) : [];
    if (!Array.isArray(jsonData)) {
      jsonData = [];
    }
    console.log('Existing stored data: ', jsonData);
    jsonData.push(data);
    await AsyncStorage.setItem('storedData', JSON.stringify(jsonData));
    console.log('Data stored successfully.');
  } catch (error) {
    if (error.name === 'SyntaxError') {
      console.error('Failed to parse stored data as JSON');
    } else {
      console.error('Failed to store data: ', error.message);
    }
  }
};

export default handleStore;
