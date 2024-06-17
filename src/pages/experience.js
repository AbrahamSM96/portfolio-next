import { memo } from "react";

import ExperienceComponent from "@components/Experience";

function Experience(props) {
  return <ExperienceComponent {...props} />;
}

export default memo(Experience);
export async function getStaticProps() {
  const API_URLS = [
    `${process.env.API_URL}/about`,
    `${process.env.API_URL}/contact`,
    `${process.env.API_URL}/social`,
  ];

  // eslint-disable-next-line no-undef
  const dataResponse = await Promise.all(
    API_URLS.map(async (url) => {
      const resp = await fetch(url);
      return resp.json();
    })
  );

  return { props: { dataResponse } };
}
