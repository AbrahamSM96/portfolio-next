import { useRouter } from "next/router";
import ArrowAnimation from "@components/ArrowAnimation";
import ListItems from "../ListItems";
import styles from "./ListContainer.module.css";
import { useI18N } from "@context/state";

export default function ListContainer({ dataResponse }) {
  const { translate } = useI18N();
  const router = useRouter();
  const { title } = dataResponse[0];
  const NAME_SECTION_OBJECT = {
    Projects: "TITLE_PROJECTS",
    Skills: "TITLE_SKILLS",
  };
  const RENAME_SECTIONS = NAME_SECTION_OBJECT[title];
  const PATH_PUSH = RENAME_SECTIONS === "TITLE_SKILLS" ? "projects" : "about";
  return (
    <div className={styles._container}>
      <div className={styles._title}>
        <h1>{translate(RENAME_SECTIONS)}</h1>
      </div>
      <ListItems dataResponse={dataResponse} />
      <div className={styles._button}>
        <ArrowAnimation route={() => router.push(`/${PATH_PUSH}`)} />
      </div>
    </div>
  );
}
