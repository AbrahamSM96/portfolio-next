import Image from "next/image";

import Social from "@components/Social";
import { useI18n } from "@hooks/useI18N";

import styles from "./AboutContainer.module.css";

export default function AboutContainer({ dataResponse }) {
  const { subtitle } = dataResponse[0][0];
  const contactData = dataResponse[1][0];
  const socialData = dataResponse[2][0];

  const { img: imgContact } = contactData;

  const { translate } = useI18n();

  return (
    <>
      <div className={styles._title}>
        <h1>{translate("TITLE_ABOUT")}</h1>
      </div>
      <div className={styles._container}>
        <div className={styles._contentImage}>
          {imgContact.length > 0 && (
            <figure className={styles._contentImage_figure}>
              <Image
                src={imgContact}
                alt={subtitle}
                className={styles._contentImage_img}
                loading="lazy"
                width={300}
                height={300}
              />
            </figure>
          )}
        </div>
        <div className={styles._contentInfo}>
          <h1 className={styles._contentInfo_title}>{subtitle}</h1>
          <p className={styles._contentInfo_data}>
            {translate("DESCRIPTION_ABOUT")}
          </p>
        </div>
      </div>
      <Social contactData={contactData} socialData={socialData} />
    </>
  );
}
