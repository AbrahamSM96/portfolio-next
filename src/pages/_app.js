import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { ContextWrapper } from "../context/state";
import Navbar from "src/components/Navbar";
import "../styles/globals.css";
import useLocalStorage from "use-local-storage";

function MyApp({ Component, pageProps }) {
  const [isFirstMount, setIsFirstMount] = useState(true);

  const router = useRouter();
  const defaultDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    // to know when reload the page
    const pageAccessedByReload =
      (window.performance.navigation &&
        window.performance.navigation.type === 1) ||
      window.performance
        .getEntriesByType("navigation")
        .map((nav) => nav.type)
        .includes("reload");
    //id reload the page, reset theme
    pageAccessedByReload ? setTheme("light") : setTheme("dark");

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
    <div className="_global" data-theme={theme}>
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
          {PATH !== "/" && <Navbar switchTheme={switchTheme} />}
          <Component
            isFirstMount={isFirstMount}
            key={router.route}
            {...pageProps}
          />
        </AnimatePresence>
      </ContextWrapper>
    </div>
  );
}

export default MyApp;
