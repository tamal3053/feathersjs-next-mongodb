import React from 'react';
import AppContext from '../store/AppContext';
import {LAYOUT, USER} from '../store/Actions';
import Menu from '../compontents/Menu';
import Layout from '../compontents/Layout';
import Head from 'next/dist/next-server/lib/head';

export default () => {
  const {state, dispatch} = React.useContext(AppContext);
  console.log('Index State', state);
  const layout = state[LAYOUT];

  return <Layout>

    <Head>
      <title>Home Page</title>
    </Head>

    <Menu/>
    <p>Welcome to the next.js! Your theme is</p>
  </Layout>;
}
