import * as React from 'react';
import {useSelector} from 'react-redux';
import NavigationRoot from './libs/Navigation/NavigationRoot';

function UlcerGuard() {
  const isAuthenticated = useSelector(state => state.auth.auth);
  console.log('Auth state: ', isAuthenticated);

  return <NavigationRoot authenticated={true} />;
}

export default UlcerGuard;
