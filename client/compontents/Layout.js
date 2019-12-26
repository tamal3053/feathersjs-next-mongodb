import Head from 'next/head';

export default function Layout({children}) {
  return <div>
    <Head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
      <title>Default</title>
    </Head>
    {children}
  </div>;
}
