import * as React from 'react';
import UlcerGuard from './src/UlcerGuard';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  const isAuthenticated = true;

  return (
    <NavigationContainer>
      <UlcerGuard authenticated={isAuthenticated} />
    </NavigationContainer>
  );
}

export default App;
