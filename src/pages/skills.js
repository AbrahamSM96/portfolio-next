import { memo } from "react";
import Head from "next/head";
import SkillsContainer from "src/components/Skills/SkillsContainer";

function Skills() {
  return (
    <>
      <Head>
        <title> Skills | Abraham Serrano </title>
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
        <meta property="og:title" content=" Skills | Abraham Serrano " />
        <meta
          property="og:description"
          content="Abraham Serrano Montiel Frontend Developer Page with projects and social network"
        />
        <meta property="og:url" content="https://abrahamsm.com/" />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <SkillsContainer />
    </>
  );
}

export default memo(Skills);
