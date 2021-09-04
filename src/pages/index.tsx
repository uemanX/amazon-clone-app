import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}

        {/* ProductFeed */}
      </main>
    </div>
  );
};

export default Home;
