import React from 'react';

export default function NavigationRoot({
  authenticated,
}: {
  authenticated: boolean;
}) {
  if (authenticated) {
    const AuthScreens = require('./AuthScreens').default;
    return <AuthScreens />;
  }
  const PublicScreens = require('./PublicScreens').default;
  return <PublicScreens />;
}
