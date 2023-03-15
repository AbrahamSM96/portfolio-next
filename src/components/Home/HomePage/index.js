import Image from "next/image";
import { useRouter } from "next/router";

import { AnimatePresence } from "framer-motion";

import { useI18n } from "@hooks/useI18N";

import styles from "./Homepage.module.css";
import ArrowAnimation from "../../ArrowAnimation";

export default function HomePage({ hero }) {
  const router = useRouter();

  const { title = "", subtitle, img = "" } = hero[0];

  const { translate } = useI18n();

  return (
    <>
      <AnimatePresence>
        <div className={styles._container}>
          <div className={styles._content}>
            <h1 className={styles._h1}>{title}</h1>
            <h2 className={styles._h2}>{subtitle}</h2>
            <p className={styles._p}>{translate("DESCRIPTION")}</p>
            <figure className={styles._figure}>
              <Image
                src={img}
                alt={title}
                className={styles._img}
                layout="responsive"
                width={150}
                height={150}
              />
            </figure>
            <ArrowAnimation
              style={{ zIndex: "2", marginRight: 0 }}
              route={() => router.push("/skills")}
            />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}
