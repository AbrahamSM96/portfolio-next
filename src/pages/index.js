import { memo } from "react";
import dynamic from "next/dynamic";

import { useInitTransition } from "@hooks/useInitTransition";

const InitialTrans = dynamic(() => import("@components/InitialTransition"));
const HomePage = dynamic(() => import("@components/Home/HomePage"));

function Home(props) {
  const { isFirstMount } = useInitTransition();

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
