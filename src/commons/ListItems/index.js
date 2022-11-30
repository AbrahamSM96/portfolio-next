import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./ListItems.module.css";
import { useAppContext } from "@context/state";
import Image from "next/image";

export default function ListItems(props) {
  const { load } = useAppContext();
  const {
    skills: { skillArray = [] } = {},
    projects: { projectsArray = [] } = {},
  } = props;
  const NOTFOUND_POSTER = "https://dummyimage.com/120x120.png";
  const isSkills =
    skillArray.length > 0
      ? styles._listCard_skills
      : styles._listCard_img_projects;
  let data = skillArray.length > 0 ? skillArray : projectsArray;

  const Skele = () => {
    return (
      <SkeletonTheme color="#d3d3d3" highlightColor="#706f6f">
        <Skeleton
          count={7}
          width={230}
          height={190}
          style={{ margin: "1rem" }}
        />
      </SkeletonTheme>
    );
  };

  const Images = () => {
    return (
      <>
        {data.map(({ id, img = NOTFOUND_POSTER, name, project, url }) => (
          <div key={id} className={styles._listCard}>
            <a href={url && url} target="_blank" rel="noreferrer">
              {img.length > 0 && (
                <figure
                  className={
                    url
                      ? styles._listCard_figure_projects
                      : styles._listCard_figure_skills
                  }
                >
                  <Image
                    src={img}
                    alt={name}
                    width={400}
                    height={380}
                    layout="responsive"
                    className={isSkills}
                  />
                </figure>
              )}
            </a>
            <h2 className={styles._listCard_title}>{name || project}</h2>
          </div>
        ))}
      </>
    );
  };

  return (
    <section className={styles._content}>
      {load ? <Skele /> : <Images />}
    </section>
  );
}
