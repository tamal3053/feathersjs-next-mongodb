import React from 'react';
import App from 'next/app';
import StoreProvider from '../store/StoreProvider';

class ThisApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>;
  }
}

export default ThisApp;
