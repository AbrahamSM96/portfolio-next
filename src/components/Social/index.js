import { GrLinkedinOption, GrGithub } from "react-icons/gr";
import styles from "./Social.module.css";
import { useAppContext } from "@context/state";

export default function Social({ contactData, socialData }) {
  const { translate } = useAppContext();
  const { urlPortfolio, socialMedia = [] } = socialData;
  const { email } = contactData;
  const SIZE = "80";
  const iconSocial = {
    Linkedin: <GrLinkedinOption size={SIZE} />,
    GitHub: <GrGithub size={SIZE} />,
  };

  return (
    <>
      <div className={styles._contact_title}>
        <h1>{translate("TITLE_CONTACT")}</h1>
      </div>
      <div className={styles._container}>
        <div className={styles._contact}>
          <h2>{translate("SUBTITLE_CONTACT")}</h2>
          <span className={styles._contact_emailContainer}>
            <a href="https://outlook.live.com">{email}</a>
          </span>
        </div>
        <div className={styles._social}>
          <div className={styles._social_networks}>
            {socialMedia.map(({ id, url, name }) => {
              return (
                <figure
                  key={id}
                  className={
                    name === "Linkedin" ? styles._linkedin : styles._github
                  }
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Linkedin"
                  >
                    {iconSocial[name]}
                  </a>
                </figure>
              );
            })}
          </div>
          <div className={styles._social_portfolio}>
            <span>
              <a
                href={urlPortfolio}
                rel="Curriculum_AbrahamSM"
                download={urlPortfolio}
              >
                CV
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
