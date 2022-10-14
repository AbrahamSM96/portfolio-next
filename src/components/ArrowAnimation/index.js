import styles from "./ArrowAnimation.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ArrowAnimation({ route, style }) {
  const [theme, setTheme] = useState("");
  const router = useRouter();
  const PATH = router.pathname;
  const styleHome =
    PATH === "/" && theme === "light"
      ? "transparent"
      : PATH === "/" && theme === "dark"
      ? "var(--arrow)"
      : "var(--arrow)";
  // const validTheme = themeLocal === 'dark' ? {'background'}
  useEffect(() => {
    const themeLocal = localStorage.getItem("theme");
    setTheme(themeLocal);
  }, []);
  return (
    <>
      <div className={styles._content_button} style={style}>
        <div
          className={styles._button}
          style={{}}
          onClick={route}
          name="scroll"
        >
          <div className={styles._scrolldown}>
            <span style={{ background: styleHome }} />
          </div>
        </div>
      </div>
    </>
  );
}
