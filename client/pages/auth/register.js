import React from 'react';
import AppContext from '../../store/AppContext';
import {TOKEN, USER} from '../../store/Actions';
import Menu from '../../compontents/Menu';
import Layout from '../../compontents/Layout';
import Head from 'next/head';
import AuthService from '../../utils/AuthService';
import {useRouter} from 'next/router';

export default () => {

  const {state, dispatch} = React.useContext(AppContext);
  const [formData, setFormData] = React.useState(null);
  const Auth = new AuthService();
  const router = useRouter();

  const handleSubmit = async (event) => {

    event.preventDefault();

    const user = await Auth.register(formData.name, formData.email, formData.password);

    if (Auth.loggedIn()) {

      await dispatch({
        type: TOKEN,
        payload: user.accessToken
      });

      await dispatch({
        type: USER,
        payload: user.user
      });

      return router.push('/');
    }

  };

  return <Layout>
    <Head>
      <title>Login Page</title>
    </Head>
    <Menu/>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="name" name={'name'} id={'name'}
               onChange={e => setFormData({...formData, name: e.target.value})}/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name={'email'} id={'email'}
               onChange={e => setFormData({...formData, email: e.target.value})}/>
      </div>
      <div>
        <label htmlFor="email">Password</label>
        <input type="password" name={'password'} id={'password'}
               onChange={e => setFormData({...formData, password: e.target.value})}/>
      </div>
      <div>
        <button type={'submit'}>Register</button>
      </div>
    </form>
  </Layout>;
}
