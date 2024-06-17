"use server";

import { FaHeart } from "react-icons/fa";
import styles from "./Footer.module.css";
import DynamicYear from "./DynamicYear";

export default function Footer() {
  return (
    <>
      <footer className={styles._footer}>
        <span>©</span>
        <DynamicYear />
        <span>
          , Made with <FaHeart className={styles._footer_heart} /> by AbrahamSM
        </span>
      </footer>
    </>
  );
}
