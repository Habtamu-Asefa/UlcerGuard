import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UlcerGuard from './src/UlcerGuard';

function App() {
  const isAuthenticated = true;

  return (
    <NavigationContainer>
      <UlcerGuard authenticated={isAuthenticated} />
    </NavigationContainer>
  );
}

export default App;
