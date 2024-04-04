import * as React from 'react';
import NavigationRoot from './libs/Navigation/NavigationRoot';

function UlcerGuard({authenticated}: {authenticated: boolean}) {
  return <NavigationRoot authenticated={authenticated} />;
}

export default UlcerGuard;
