import Image from "next/image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./AboutContainer.module.css";
import { useAppContext } from "@context/state";
import Social from "@components/Social";
import { useI18N } from "@context/state";

export default function AboutContainer({ dataResponse }) {
  const { subtitle } = dataResponse[0][0];
  const contactData = dataResponse[1][0];
  const { img: imgContact } = contactData;
  const socialData = dataResponse[2][0];
  const { translate } = useI18N();
  const { load } = useAppContext();

  return (
    <>
      <div className={styles._title}>
        <h1>{translate("TITLE_ABOUT")}</h1>
      </div>
      {load ? (
        <SkeletonTheme color="#d3d3d3" highlightColor="#706f6f">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "0 2rem",
            }}
          >
            <Skeleton height={250} width={200} />
            <Skeleton height={200} width={500} />
          </div>
        </SkeletonTheme>
      ) : (
        <div className={styles._container}>
          <div className={styles._contentImage}>
            {imgContact === "undefined" ? (
              <SkeletonTheme color="#d3d3d3" highlightColor="#706f6f">
                <Skeleton height={250} width={200} />
              </SkeletonTheme>
            ) : (
              <figure className={styles._contentImage_figure}>
                {imgContact.length > 0 && (
                  <Image
                    src={imgContact}
                    alt={subtitle}
                    className={styles._contentImage_img}
                    loading="lazy"
                    width={300}
                    height={300}
                  />
                )}
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
      )}
      <Social contactData={contactData} socialData={socialData} />
    </>
  );
}
