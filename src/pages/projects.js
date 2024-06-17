import { memo } from "react";
import dynamic from "next/dynamic";

const ProjectContainer = dynamic(() => import("@components/Projects"));

function Projects(props) {
  return (
    <>
      {/* <motion.section exit={{ opacity: 0 }}>
     
      </motion.section> */}
      <ProjectContainer {...props} />
    </>
  );
}

export default memo(Projects);

export async function getStaticProps() {
  const API = `${process.env.API_URL}/projects`;

  const response = await fetch(API);
  const dataResponse = await response.json();

  return { props: { dataResponse } };
}
