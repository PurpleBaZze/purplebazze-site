
import Head from 'next/head'

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #6A0DAD, #000000, #00FF00)',
      color: 'white',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <Head>
        <title>PurpleBaZze</title>
      </Head>
      <img src="/purplebazze-logo.png" alt="PurpleBaZze Logo" style={{ maxWidth: '300px', margin: '0 auto' }} />
      <h1 style={{ fontSize: '3rem', marginTop: '1rem' }}>Willkommen bei PurpleBaZze</h1>
      <p style={{ fontSize: '1.2rem' }}>Dein Partner für smarte Vergleiche & starke Deals</p>
    </div>
  );
}
