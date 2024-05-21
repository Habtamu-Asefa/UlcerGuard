import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UlcerGuard from './UlcerGuard';
import {Provider, useSelector} from 'react-redux';
import {persistor, store} from './libs/Redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import BootSplash from 'react-native-bootsplash';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer
          onReady={() => {
            BootSplash.hide();
          }}>
          <UlcerGuard />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
