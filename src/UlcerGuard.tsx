import * as React from 'react';

function UlcerGuard({authenticated}) {
  if (authenticated) {
    const AuthScreens = require('./libs/Navigation/AuthScreens').default;

    return <AuthScreens />;
  }
  const PublicScreens = require('./libs/Navigation/PublicScreens').default;
  return <PublicScreens />;
}

export default UlcerGuard;
