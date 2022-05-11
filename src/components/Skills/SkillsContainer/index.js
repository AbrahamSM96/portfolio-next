import { useRouter } from "next/router";
import ArrowAnimation from "../../ArrowAnimation";
import SkillsItem from "../SkillsItem";
import styles from "./SkillsContainer.module.css";
import { useI18N } from "@context/state";

export default function SkillsContainer({ skills }) {
  const { translate } = useI18N();
  const router = useRouter();

  return (
    <div className={styles._container}>
      <div className={styles._title}>
        <h1>{translate("TITLE_SKILLS")}</h1>
      </div>
      <SkillsItem skills={skills} />
      <div className={styles._button}>
        <ArrowAnimation route={() => router.push("/projects")} />
      </div>
    </div>
  );
}
