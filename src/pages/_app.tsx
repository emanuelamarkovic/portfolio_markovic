import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/NavBar";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Webdeveloper Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
      >
        <Navbar />
        <Component {...pageProps} />
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
