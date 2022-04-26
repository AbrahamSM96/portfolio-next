import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./SkillsItem.module.css";
import { useAppContext } from "../../../context/state";
import Image from "next/image";

export default function SkillsItem({ skills }) {
  const { load } = useAppContext();
  const { skillArray = [] } = skills;
  const NOTFOUND_POSTER = "https://dummyimage.com/120x120.png";
  return (
    <>
      <div className={styles._content}>
        {load ? (
          <SkeletonTheme color="#d3d3d3" highlightColor="#706f6f">
            <Skeleton
              count={7}
              width={230}
              height={190}
              style={{ margin: "1rem" }}
            />
          </SkeletonTheme>
        ) : (
          <>
            {skillArray.map(({ id, img = NOTFOUND_POSTER, name }) => (
              <div key={id} className={styles._skillCard}>
                {img.length > 0 && (
                  <figure className={styles._skillCard_figure}>
                    <Image
                      src={img}
                      alt={name}
                      width={400}
                      height={380}
                      layout="responsive"
                      className={name === "Next.js" ? styles._next : ""}
                    />
                  </figure>
                )}

                <h2 className={styles._skillCard_title}>{name}</h2>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
