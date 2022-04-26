import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./ProjectsItem.module.css";
import { useAppContext } from "../../../context/state";
import Image from "next/image";

export default function ProjectsItem({ projects }) {
  const { load } = useAppContext();
  const { projectsArray = [] } = projects;
  const NOTFOUND_POSTER = "https://dummyimage.com/120x120.png";

  return (
    <div className={styles._content}>
      {load ? (
        <SkeletonTheme color="#d3d3d3" highlightColor="#706f6f">
          <Skeleton
            count={6}
            width={240}
            height={250}
            style={{
              margin: "1rem .5rem",
            }}
          />
        </SkeletonTheme>
      ) : (
        <>
          {projectsArray.map(({ id, project, img = NOTFOUND_POSTER, url }) => (
            <div key={id} className={styles._projectCard}>
              <a href={url} target="_blank" rel="noreferrer">
                {img.length > 0 && (
                  <figure className={styles._projectCard_figure}>
                    <Image
                      className={styles._projectCard_img}
                      src={img}
                      alt={project}
                      width={360}
                      height={380}
                      layout="responsive"
                    />
                  </figure>
                )}
              </a>
              <h2 className={styles._projectCard_title}>{project}</h2>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
