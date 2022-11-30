import { memo } from "react";
import dynamic from "next/dynamic";

const ListContainer = dynamic(() => import("@commons/ListContainer"));

function Projects({ projects }) {
  return (
    <>
      {/* <motion.section exit={{ opacity: 0 }}>
     
      </motion.section> */}
      <ListContainer projects={projects} />
    </>
  );
}

export default memo(Projects);

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/api/data`);
  const { projects } = await response.json();

  return { props: { projects } };
}
