import { memo } from "react";
import Head from "next/head";
import SkillsContainer from "src/components/Skills/SkillsContainer";

function Skills() {
  return (
    <>
      <SkillsContainer />
    </>
  );
}

export default memo(Skills);
