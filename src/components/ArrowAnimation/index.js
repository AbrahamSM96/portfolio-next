import styles from "./ArrowAnimation.module.css";
// import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";

function ArrowAnimation({ route, style }) {
  const [theme, setTheme] = useState("light");
  // const router = useRouter();
  // const PATH = router.pathname;
  const styleHome = theme === '"light"' ? "transparent" : "var(--arrow)";
  // const validTheme = themeLocal === 'dark' ? {'background'}
  useEffect(() => {
    const themeLocal = localStorage.getItem("theme");
    setTheme(themeLocal);
  }, []);
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

export default memo(ArrowAnimation);
