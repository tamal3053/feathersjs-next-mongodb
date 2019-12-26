import React from 'react';
import Link from 'next/link';

export default function Menu() {
  return <nav>
    <ul>
      <li><Link href={'/'}><a>Home</a></Link></li>
      <li><Link href={'/about'}><a>About</a></Link></li>
      <li><Link href={'/auth/login'}><a>Login</a></Link></li>
    </ul>
  </nav>
}
