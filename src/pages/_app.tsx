import { Footer, Navbar } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      
      <NextNProgress color="#6366f1" options={{ showSpinner: false }} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}
