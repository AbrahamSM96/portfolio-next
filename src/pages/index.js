import { memo } from "react";
import dynamic from "next/dynamic";
function Home(props) {
  const InitialTrans = dynamic(() => import("@components/InitialTransition"));
  const HomePage = dynamic(() => import("@components/Home/HomePage"));
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
      {isFirstMount && <InitialTrans />}
      <HomePage {...props} />
    </>
  );
}
export default memo(Home);

export async function getStaticProps() {
  const API_URL = `${process.env.API_URL}/hero`;
  const response = await fetch(API_URL);
  const hero = await response.json();

  return { props: { hero } };
}
