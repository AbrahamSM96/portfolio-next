import styles from "./ArrowAnimation.module.css";

export default function ArrowAnimation({ route, style }) {
  return (
    <>
      <div className={styles._content_button} style={style}>
        <button className={styles._button} onClick={route}>
          <div className={styles._scrolldown}>
            <span />
          </div>
        </button>
      </div>
    </>
  );
}
