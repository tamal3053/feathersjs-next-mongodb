import React from 'react';
import StoreProvider from '../store/StoreProvider';

/**
 * Extends Next/App to Provide the Store to this app.
 * @param Component
 * @param pageProps
 * @returns {*}
 * @constructor
 */
export default function ThiApp({Component, pageProps}) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
