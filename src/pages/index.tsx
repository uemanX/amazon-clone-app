import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Banner from '@/components/Banner';

const Home = () => {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
      </main>
    </div>
  );
};

export default Home;
