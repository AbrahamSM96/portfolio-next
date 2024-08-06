import { useEffect, useState } from "react";

import { useI18n } from "@hooks/useI18N";

import styles from "./Homepage.module.css";

const TEXT_SHADOW = "#FFF 2px 1px 2px";
const SAY_HI = "Hi I'm Abraham 👋🏻";
const EMOJISMEX = ["🇲🇽", "🌮", "🌯", "🫔"];

export default function ContentHome({ primaryColor }) {
  const [timeEmoji, setTimeEmoji] = useState(0);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
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

    return () => clearTimeout(timeOutID);
  }, [timeEmoji]);

  const emojiChanges = EMOJISMEX[timeEmoji];
  const { translate } = useI18n();

  return (
    <>
      <h1 className={styles._title} style={{ color: primaryColor }}>
        {SAY_HI}
      </h1>
      <h2 className={styles._subtitle}>
        <span style={{ color: "#006341", textShadow: TEXT_SHADOW }}>
          Front{" "}
        </span>
        <span style={{ color: "#FFF", textShadow: TEXT_SHADOW }}>End </span>
        <span style={{ color: "#C8102E", textShadow: TEXT_SHADOW }}>
          Developer {emojiChanges}
        </span>
      </h2>
      <p className={styles._contentDescription} style={{ color: primaryColor }}>
        {translate("DESCRIPTION")}
      </p>
    </>
  );
}
