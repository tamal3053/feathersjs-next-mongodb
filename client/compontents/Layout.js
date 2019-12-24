import Head from 'next/head';

export default function Layout({children}) {
  return <div>
    <Head>
      <title>Default</title>
    </Head>
    {children}
  </div>
}
