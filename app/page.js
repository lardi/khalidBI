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
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <h1 className="text-3xl">👋 سلام</h1>
      </main>
    </>
  );
}
