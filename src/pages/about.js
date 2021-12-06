import { memo } from "react";
import Head from "next/head";
import AboutContainer from "src/components/About/AboutContainer";
import Footer from "src/components/Footer";

function About() {
  return (
    <>
      <Head>
        <title> About | Abraham Serrano </title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta
          name="description"
          content="Abraham Serrano Montiel Frontend Developer Page with projects and social network"
        />
        <meta property="og:title" content=" About | Abraham Serrano " />
        <meta
          property="og:description"
          content="Abraham Serrano Montiel Frontend Developer Page with projects and social network"
        />
        <meta property="og:url" content="https://abrahamsm.com/" />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <AboutContainer />
      <Footer />
    </>
  );
}

export default memo(About);
