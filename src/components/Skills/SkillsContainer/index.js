import { useRouter } from "next/router";
import ArrowAnimation from "../../ArrowAnimation";
import SkillsItem from "../SkillsItem";
import styles from "./SkillsContainer.module.css";
export default function SkillsContainer() {
  const router = useRouter();

  return (
    <div className={styles._container}>
      <div className={styles._title}>
        <h1>Skills</h1>
      </div>
      <SkillsItem />
      <div className={styles._button}>
        <ArrowAnimation route={() => router.push("/projects")} />
      </div>
    </div>
  );
}
