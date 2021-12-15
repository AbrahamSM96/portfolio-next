import { memo } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import dynamic from "next/dynamic";
import Head from "next/head";
import AboutContainer from "src/components/About/AboutContainer";
import Footer from "src/components/Footer";

function About() {
  return (
    <>
      <AboutContainer />
      <Footer />
    </>
  );
}

export default memo(About);
