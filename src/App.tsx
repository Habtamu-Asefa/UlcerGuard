import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UlcerGuard from './UlcerGuard';
import {Provider} from 'react-redux';
import {persistor, store} from './libs/Redux/store';
import {PersistGate} from 'redux-persist/integration/react';

function App() {
  const isAuthenticated = false;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <UlcerGuard authenticated={isAuthenticated} />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
