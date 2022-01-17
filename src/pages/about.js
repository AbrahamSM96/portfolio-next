import { memo } from "react";
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
