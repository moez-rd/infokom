import "../styles/global.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import { Navbar, Footer } from "@/components";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <NextNProgress color="#3b82f6" options={{ showSpinner: false }} />
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </Fragment>
  );
}
