import { GrLinkedinOption, GrGithub, GrFacebook } from "react-icons/gr";
import styles from "./Social.module.css";
import { useAppContext } from "../../context/state";

export default function Social() {
  const { data, translate } = useAppContext();
  const { contact = {}, social = {} } = data;

  const { urlPortfolio, socialMedia = [] } = social;
  const { email } = contact;
  const SIZE = "80";
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
            <figure className={styles._linkedin}>
              <a
                href={socialMedia[0] ? socialMedia[0].url : ""}
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin"
              >
                <GrLinkedinOption size={SIZE} />
              </a>
            </figure>
            <figure className={styles._github}>
              <a
                href={socialMedia[1] ? socialMedia[2].url : ""}
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <GrGithub size={SIZE} />
              </a>
            </figure>
            <figure className={styles._facebook}>
              <a
                href={socialMedia[2] ? socialMedia[1].url : ""}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <GrFacebook size={SIZE} />
              </a>
            </figure>
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
