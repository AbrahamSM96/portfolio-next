"use server";

import styles from "./ListItems.module.css";
import Image from "next/image";

export default function ListItems({ dataResponse }) {
  const { skills = [], projects = [] } = dataResponse[0];

  const NOTFOUND_POSTER = "https://dummyimage.com/120x120.png";

  const SKILLS_VALIDATE = skills.length > 0;

  const isSkills = SKILLS_VALIDATE
    ? styles._listCard_skills
    : styles._listCard_img_projects;

  const dataSkills = SKILLS_VALIDATE > 0 ? skills : projects;

  const Images = () => {
    return (
      <>
        {dataSkills.map(({ id, img = NOTFOUND_POSTER, name, url }) => (
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
                    fill
                    sizes="(min-width: 1024px) 200px, (min-width: 768px) 150px, 100px"
                    className={isSkills}
                    priority
                  />
                </figure>
              )}
            </a>
            <h2 className={styles._listCard_title}>{name}</h2>
          </div>
        ))}
      </>
    );
  };

  return (
    <section className={styles._content}>
      <Images />
    </section>
  );
}
