import { useRouter } from "next/router";
import ArrowAnimation from "@components/ArrowAnimation";
import ListItems from "../ListItems";
import styles from "./ListContainer.module.css";
import { useI18n } from "@hooks/useI18N";
import { nameSections } from "@utils/nameSections";

export default function ListContainer({ dataResponse }) {
  const { translate } = useI18n();
  const router = useRouter();

  const { title } = dataResponse[0];

  const { RENAME_SECTIONS, PATH_PUSH } = nameSections(title);

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
