import { memo } from "react";
import dynamic from "next/dynamic";

const ListContainer = dynamic(() => import("@commons/ListContainer"));
function Skills({ skills }) {
  return (
    <>
      <ListContainer skills={skills} />
    </>
  );
}

export default memo(Skills);

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/api/data`);
  const { skills } = await response.json();

  return { props: { skills } };
}
