import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { ContextWrapper } from "../context/state";
import Navbar from "src/components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isFirstMount, setIsFirstMount] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const PATH = router.pathname;

  const pathToTitleHead = (PATH) => {
    const PATHS = {
      "/": "Abraham Serrano Montiel",
      "/skills": "Skills",
      "/projects": "Projects",
      "/about": "About",
    };
    const SUBTITLE = {
      "/": "Frontend Developer",
      "/skills": "Abraham Serrano Montiel",
      "/projects": "Abraham Serrano Montiel",
      "/about": "Abraham Serrano Montiel",
    };
    const PATH_DEFAULT = "/";
    const PATH_TITLE = PATHS[PATH] || PATH_DEFAULT;
    const PATH_NOW_SUBTITLE = SUBTITLE[PATH] || PATH_DEFAULT;
    return { PATH_TITLE, PATH_NOW_SUBTITLE };
  };

  const { PATH_TITLE, PATH_NOW_SUBTITLE } = pathToTitleHead(PATH);
  return (
    <>
      <Head>
        <title>{`${PATH_TITLE} | ${PATH_NOW_SUBTITLE}`}</title>
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
        <meta
          property="og:title"
          content="Abraham Serrano Montiel | Frontend Developer"
        />
        <meta
          property="og:description"
          content="Abraham Serrano Montiel Frontend Developer Page with projects and social network"
        />
        <meta property="og:url" content="https://abrahamsm.com/" />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="gxdbqKjT2eHsw2NPwRE-NIlkHBsd2PRhcFZ_Nckf61o"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ContextWrapper>
        <AnimatePresence>
          {PATH !== "/" && <Navbar />}
          <Component
            isFirstMount={isFirstMount}
            key={router.route}
            {...pageProps}
          />
        </AnimatePresence>
      </ContextWrapper>
    </>
  );
}

// MyApp.getInitialProps = async () => {
//   const response = await fetch(`${process.env.API_URL}/api/data`);
//   const {
//     about,
//     contact,
//     hero,
//     projects,
//     skills,
//     social,
//   } = await response.json();

//   return { props: { hero, about, skills, projects, contact, social } };
// };
export default MyApp;
