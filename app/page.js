import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
      <title>KhalidBI | الرئيسية</title>
      <meta name="description" content="Salam 👋" />
      <meta property="og:title" content="KhalidBI | الرئيسية" />
      <meta property="og:description" content="مرحبًا بك" />
      <meta property="og:image" content="/home-og-image.png" />
      <meta name="twitter:card" content="Salam 👋" />
    </Head>
    <main>
      <h1 className='text-3xl'>👋 سلام</h1>
    </main>
  </>
  );
}
