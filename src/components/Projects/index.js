"use server";

import styles from "./Projects.module.css";
import stylees from "../Experience/Experience.module.css";
import "atropos/css";
import Atropos from "atropos/react";

export default function Projects({ dataResponse }) {
  const { projects = [] } = dataResponse[0];
  const NOTFOUND_POSTER = "https://dummyimage.com/120x120.png";

  return (
    <div>
      <div className={stylees._code_wrap}>
        <h1 className={stylees._dot}>{`<Projects/>`}</h1>
      </div>
      <section className={styles._container}>
        {projects.map(({ id, name, img = NOTFOUND_POSTER, url }, index) => {
          return (
            <Atropos
              key={`project-${name}-${index}`}
              className={styles._container_card}
            >
              <article style={{ width: "100%", height: "400px" }}>
                <a href={url} alt={name}>
                  <div
                    key={id}
                    className={styles._card}
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPositionX: "center",
                    }}
                  >
                    <div className={styles._container_content}>
                      <div className={styles._card_title}>
                        <h2>{`<${name}/>`}</h2>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            </Atropos>
          );
        })}
      </section>
    </div>
  );
}
