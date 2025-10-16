"use client";

import "@/styles/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasSeenLoading = sessionStorage.getItem("hasSeenLoading");

    if (!hasSeenLoading) {
      setIsLoading(true);
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasSeenLoading", "true");
      }, 6000);
      
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return (
    <ThemeProvider>
      <Head>
        <link rel="icon" href="/images/logoCoffee.png" />
      </Head>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <main className="min-h-[calc(100vh-128px)]">
            <Component {...pageProps} />
          </main>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}