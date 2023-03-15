import { memo } from "react";
import dynamic from "next/dynamic";

const ListContainer = dynamic(() => import("@commons/ListContainer"));

function Skills(props) {
  return (
    <>
      <ListContainer {...props} />
    </>
  );
}

export default memo(Skills);

export async function getStaticProps() {
  const API = `${process.env.API_URL}/skills`;

  const response = await fetch(API);
  const dataResponse = await response.json();

  return { props: { dataResponse } };
}
