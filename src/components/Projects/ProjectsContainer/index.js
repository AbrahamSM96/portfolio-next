import { useRouter } from "next/router";
import ArrowAnimation from "@components/ArrowAnimation";
import ProjectsItem from "../ProjectsItem";
import styles from "./ProjectsContainer.module.css";
import { useI18N } from "@context/state";

export default function ProjectsContainer({ projects }) {
  const { translate } = useI18N();
  const router = useRouter();
  return (
    <div className={styles._container}>
      <div className={styles._title}>
        <h1>{translate("TITLE_PROJECTS")}</h1>
      </div>
      <ProjectsItem projects={projects} />
      <div className={styles._button}>
        <ArrowAnimation route={() => router.push("/about")} />
      </div>
    </div>
  );
}
