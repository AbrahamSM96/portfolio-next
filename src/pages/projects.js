import { memo } from "react";
import Head from "next/head";
import ProjectsContainer from "src/components/Projects/ProjectsContainer";

function Projects() {
  return (
    <>
      {/* <motion.section exit={{ opacity: 0 }}>
     
      </motion.section> */}
      <Head>
        <title> Projects | Abraham Serrano </title>
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
        <meta property="og:title" content=" Projects | Abraham Serrano " />
        <meta
          property="og:description"
          content="Abraham Serrano Montiel Frontend Developer Page with projects and social network"
        />
        <meta property="og:url" content="https://abrahamsm.com/" />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ProjectsContainer />
    </>
  );
}

export default memo(Projects);
