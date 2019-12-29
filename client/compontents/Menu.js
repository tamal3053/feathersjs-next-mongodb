import React from 'react';
import Link from 'next/link';
import AuthService from '../utils/AuthService';


export default function Menu() {

  const Auth = new AuthService();

  return <nav>
    <ul>
      <li><Link href={'/'}><a>Home</a></Link></li>
      <li><Link href={'/about'}><a>About</a></Link></li>

      {!Auth.loggedIn() && <>
        <li><Link href={'/auth/login'}><a>Login</a></Link></li>
        <li><Link href={'/auth/register'}><a>Register</a></Link></li>
      </>}

      {Auth.loggedIn() && <>
        <li><a href="javascript:void(0)" onClick={() => Auth.logout()}>Logout</a></li>
      </>}

    </ul>
  </nav>;
}
