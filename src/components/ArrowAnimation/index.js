import styles from "./ArrowAnimation.module.css";
import { useRouter } from "next/router";

export default function ArrowAnimation({ route, style }) {
  const router = useRouter();
  const PATH = router.pathname;
  const styleHome = PATH === "/" ? "transparent" : "var(--arrow)";
  return (
    <>
      <div className={styles._content_button} style={style}>
        <div className={styles._button} onClick={route} name="scroll">
          <div className={styles._scrolldown}>
            <span style={{ background: styleHome }} />
          </div>
        </div>
      </div>
    </>
  );
}
