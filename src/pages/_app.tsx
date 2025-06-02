'use client';

import '@/styles/globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import Loading from './Loading';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider>
        <Loading />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}