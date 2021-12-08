import { memo } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import dynamic from "next/dynamic";
import Head from "next/head";
const AboutContainer = dynamic(
  () => import("src/components/About/AboutContainer"),
  {
    loading: () => (
      <SkeletonTheme color="#d3d3d3" highlightColor="#706f6f">
        <Skeleton width={1440} height={500} />
      </SkeletonTheme>
    ),
  },
);
const Footer = dynamic(() => import("src/components/Footer"), {
  loading: () => (
    <SkeletonTheme color="#d3d3d3" highlightColor="#706f6f">
      <Skeleton width={1440} height={60} />
    </SkeletonTheme>
  ),
});
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
