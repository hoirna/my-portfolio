import '@/styles/globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer'; 

export default function App({ Component, pageProps }: AppProps) {
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
