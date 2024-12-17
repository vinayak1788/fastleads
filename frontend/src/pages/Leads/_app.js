"use client";
import '../../styles/globals.css';
import React from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Metadata */}
      <Head>
        <title>FastLead99</title>
        <meta name="description" content="Lead Management Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Layout */}
      <div className="flex h-screen bg-gray-50">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 p-6">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
