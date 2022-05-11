import { memo } from "react";
import dynamic from "next/dynamic";
const InitialTrans = dynamic(() => import("@components/InitialTransition"));
const HomePage = dynamic(() => import("@components/Home/HomePage"));
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
      {isFirstMount && <InitialTrans />}
      <HomePage {...props} />
    </>
  );
}
export default memo(Home);

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/api/data`);
  const { about, contact, hero, projects, skills, social } =
    await response.json();

  return { props: { hero, about, skills, projects, contact, social } };
}
