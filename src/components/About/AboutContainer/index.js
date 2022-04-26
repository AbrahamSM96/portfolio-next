import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./AboutContainer.module.css";
import { useAppContext } from "../../../context/state";
import Social from "src/components/Social";
import Image from "next/image";
import { useI18N } from "src/context/state";

export default function AboutContainer({ contact, about }) {
  const { translate } = useI18N();
  const { load } = useAppContext();
  const { url = "" } = contact;
  const { subtitle } = about;
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
            {url === "undefined" ? (
              <SkeletonTheme color="#d3d3d3" highlightColor="#706f6f">
                <Skeleton height={250} width={200} />
              </SkeletonTheme>
            ) : (
              <figure className={styles._contentImage_figure}>
                {url.length > 0 && (
                  <Image
                    src={url}
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
      <Social />
    </>
  );
}
