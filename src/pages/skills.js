import { memo } from "react";
import dynamic from "next/dynamic";

const SkillsContainer = dynamic(() =>
  import("@components/Skills/SkillsContainer")
);
function Skills({ skills }) {
  return (
    <>
      <SkillsContainer skills={skills} />
    </>
  );
}

export default memo(Skills);

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/api/data`);
  const { skills } = await response.json();

  return { props: { skills } };
}
