import { GrLinkedinOption, GrGithub } from "react-icons/gr";
import styles from "./Social.module.css";
import { useI18n } from "@hooks/useI18N";

const SIZE = "80";

export default function Social({ socialData }) {
  const { urlPortfolio, socialMedia = [] } = socialData;

  const { translate } = useI18n();

  const iconSocial = {
    Linkedin: <GrLinkedinOption size={SIZE} />,
    GitHub: <GrGithub size={SIZE} />,
  };

  return (
    <>
      <div className={styles._contact_title}>
        <h1>{`<${translate("TITLE_CONTACT")}/>`}</h1>
      </div>
      <div className={styles._container}>
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
            <a
              href={urlPortfolio}
              rel="Curriculum_AbrahamSM"
              download={urlPortfolio}
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
