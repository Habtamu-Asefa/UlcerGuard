import * as React from 'react';
import NavigationRoot from './libs/Navigation/NavigationRoot';
import {useSelector} from 'react-redux';

function UlcerGuard() {
  const isAuthenticated = useSelector(state => state.auth.auth);
  console.log('Auth state: ', isAuthenticated);

  return <NavigationRoot authenticated={isAuthenticated} />;
}

export default UlcerGuard;
