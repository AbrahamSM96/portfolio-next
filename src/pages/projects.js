import { memo } from "react";
import Head from "next/head";
import ProjectsContainer from "src/components/Projects/ProjectsContainer";

function Projects() {
  return (
    <>
      {/* <motion.section exit={{ opacity: 0 }}>
     
      </motion.section> */}
      <ProjectsContainer />
    </>
  );
}

export default memo(Projects);
