import dynamic from "next/dynamic";
import { memo } from "react";

const ProjectsContainer = dynamic(() =>
  import("@components/Projects/ProjectsContainer")
);

function Projects({ projects }) {
  return (
    <>
      {/* <motion.section exit={{ opacity: 0 }}>
     
      </motion.section> */}
      <ProjectsContainer projects={projects} />
    </>
  );
}

export default memo(Projects);

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/api/data`);
  const { projects } = await response.json();

  return { props: { projects } };
}
