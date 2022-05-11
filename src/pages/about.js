import dynamic from "next/dynamic";
import { memo } from "react";

const AboutContainer = dynamic(() =>
  import("@components/About/AboutContainer")
);
const Footer = dynamic(() => import("@components/Footer"));

function About(props) {
  return (
    <>
      <AboutContainer {...props} />
      <Footer />
    </>
  );
}

export default memo(About);

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/api/data`);
  const { about, contact, social } = await response.json();

  return { props: { about, contact, social } };
}
