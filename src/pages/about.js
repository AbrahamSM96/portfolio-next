import dynamic from "next/dynamic";
import { memo } from "react";

const Footer = dynamic(() => import("@components/Footer"));
const Experience = dynamic(() => import("@components/Experience"));

function About(props) {
  return (
    <>
      <Experience {...props} />
      <Footer />
    </>
  );
}

export default memo(About);

export async function getStaticProps() {
  const API_URLS = [
    `${process.env.API_URL}/about`,
    `${process.env.API_URL}/contact`,
    `${process.env.API_URL}/social`,
  ];

  // eslint-disable-next-line no-undef
  const dataResponse = await Promise.all(
    API_URLS.map(async (url) => {
      const resp = await fetch(url);
      return resp.json();
    })
  );

  return { props: { dataResponse } };
}
