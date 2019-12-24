import React from "react";
import AppContext from '../store/AppContext';
import {LAYOUT} from '../store/Actions';
import Menu from '../compontents/Menu';
import Layout from '../compontents/Layout';
import Head from 'next/head';

export default () => {
  const {state, dispatch} = React.useContext(AppContext);
  const layout = state[LAYOUT];

  return <Layout>
    <Head>
      <title>About Page</title>
    </Head>
    <Menu/>
    <p>About us Page {layout.theme}</p>
  </Layout>;
}
