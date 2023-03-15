import { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import * as ga from "@lib/googleAnalytics/index.js";
import PortfolioProvider from "@context/PortfolioProvider";
import { useDarkTheme } from "@hooks/useDarkTheme";
import { pathToTitleHead } from "@utils/pathToTitleHead";

import "../styles/globals.css";

const NavBar = dynamic(() => import("@components/Navbar"), {
  loading: () => "Loading...",
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const PATH = router.pathname;

  const { theme, switchTheme } = useDarkTheme();

  const { PATH_TITLE, PATH_NOW_SUBTITLE } = pathToTitleHead(PATH);

  // Google anayltics
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
      <PortfolioProvider>
        {PATH !== "/" && <NavBar switchTheme={switchTheme} />}
        <Component key={router.route} {...pageProps} />
      </PortfolioProvider>
    </div>
  );
}

export default MyApp;
