// import Image from "next/image";
// import { useRouter } from "next/router";

import { AnimatePresence } from "framer-motion";

import { useI18n } from "@hooks/useI18N";

import styles from "./Homepage.module.css";
// import ArrowAnimation from "../../ArrowAnimation";
import { colorsRandom } from "@utils/colors";
import { useEffect, useState } from "react";
import { useContext } from "react";

import { PortfolioContext } from "@context/PortfolioContext";
import Link from "next/link";

const EMOJISMEX = ["🇲🇽", "🌮", "🌯", "🫔"];

export default function HomePage() {
  const [timeEmoji, setTimeEmoji] = useState(0);
  const [dataGet, setDataGet] = useState({});

  const { setPrimaryColor, primaryColor } = useContext(PortfolioContext);

  const { translate } = useI18n();

  const colorRandom = colorsRandom();

  const emojiChanges = EMOJISMEX[timeEmoji];

  const mouseEnter = () => {
    setPrimaryColor(colorRandom.toString());
  };

  const API_LASTVISIT = process.env.API_LASTVISIT ?? "http://localhost:3000";

  useEffect(() => {
    setPrimaryColor(colorRandom.toString());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTimeEmoji((prev) => {
        if (prev === EMOJISMEX.length - 1) {
          return 0;
        }
        if (prev === 0) {
          return prev + 1;
        }
        return prev + 1;
      });
    }, 5000);
  }, [timeEmoji]);

  useEffect(() => {
    function fetchData() {
      try {
        const data = fetch(`${API_LASTVISIT}/api/post/visit`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = data.json();
        const parsedData = JSON.parse(json.data);
        setDataGet(parsedData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [API_LASTVISIT]);

  const TEXT_SHADOW = "#FFF 2px 1px 2px";
  console.log(dataGet, "dataGet");
  console.log(API_LASTVISIT, "API_LASTVISIT");
  return (
    <>
      <AnimatePresence>
        <article
          className={styles._container}
          style={{ background: primaryColor }}
        >
          <div
            className={styles._content}
            style={{ background: "rgb(24 24 27 / 1)" }}
          >
            <h1 className={styles._title} style={{ color: primaryColor }}>
              {`Hi I'm Abraham 👋🏻`}
            </h1>
            <h2 className={styles._subtitle}>
              <span style={{ color: "#006341", textShadow: TEXT_SHADOW }}>
                Front{" "}
              </span>
              <span style={{ color: "#FFF", textShadow: TEXT_SHADOW }}>
                End{" "}
              </span>
              <span style={{ color: "#C8102E", textShadow: TEXT_SHADOW }}>
                Developer {emojiChanges}
              </span>
            </h2>
            <p
              className={styles._contentDescription}
              style={{ color: primaryColor }}
            >
              {translate("DESCRIPTION")}
            </p>

            <div className={styles._content_grid}>
              <Link
                href="/about"
                onMouseEnter={mouseEnter}
                style={{
                  "--hover-color": primaryColor,
                  "--hover-opacity": 0.5,
                }}
              >
                About me
              </Link>
              <Link
                href="/experience"
                onMouseEnter={mouseEnter}
                style={{
                  "--hover-color": primaryColor,
                  "--hover-opacity": 0.5,
                }}
              >
                Experience
              </Link>
              <Link
                href="/skills"
                onMouseEnter={mouseEnter}
                style={{
                  "--hover-color": primaryColor,
                  "--hover-opacity": 0.5,
                }}
              >
                Skills
              </Link>
              <Link
                href="/projects"
                onMouseEnter={mouseEnter}
                style={{
                  "--hover-color": primaryColor,
                  "--hover-opacity": 0.5,
                }}
              >
                Projects
              </Link>
            </div>

            {/* <figure className={styles._figure}>
              <Image
                src={img}
                alt={title}
                className={styles._img}
                layout="responsive"
                width={150}
                height={150}
              />
            </figure>
            <ArrowAnimation
              style={{ zIndex: "2", marginRight: 0 }}
              route={() => router.push("/skills")}
            /> */}
            <small>
              <span id="last"></span>
              <span id="next"></span>
            </small>
          </div>
          <div className={styles._lastvisit}>
            <span>{dataGet.city}</span>
            <span>{dataGet.country}</span>
            <span>{dataGet.flag}</span>
          </div>
        </article>
      </AnimatePresence>
    </>
  );
}
