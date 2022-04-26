import { memo } from "react";
import HomePage from "../components/Home/HomePage";
import InitialTransition from "src/components/InitialTransition";

function Home(props) {
  const { isFirstMount } = props;
  // const content = (isFirstMount) => ({
  //   animate: {
  //     transition: {
  //       staggerChildren: 0.1,
  //       delayChildren: isFirstMount ? 2.8 : 0,
  //     },
  //   },
  // });
  return (
    <>
      {isFirstMount && <InitialTransition />}
      <HomePage {...props} />
    </>
  );
}
export default memo(Home);

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/api/data`);
  const { about, contact, hero, projects, skills, social } =
    await response.json();

  return { props: { hero, about, skills, projects, contact, social } };
}
