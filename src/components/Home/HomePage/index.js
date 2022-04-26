import { useRouter } from "next/router";
import Image from "next/image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
//import { IoIosArrowForward } from 'react-icons/io'
import { AnimatePresence } from "framer-motion";
import { useAppContext, useI18N } from "../../../context/state";
import ArrowAnimation from "../../ArrowAnimation";
import styles from "./Homepage.module.css";

export default function HomePage({ hero }) {
  const router = useRouter();
  const { load } = useAppContext();
  // const { hero = {} } = data;
  const { title, subtitle, url = "" } = hero;

  // const SIZE = '25px'
  // Siguiente
  //               <IoIosArrowForward
  //                 size={SIZE}
  //                 style={{ position: 'relative', top: '0.50em' }}
  //               />
  // const skel = () => (
  //   <SkeletonTheme color="#d3d3d3" highlightColor="#706f6f">
  //     <Skeleton width={150} height={150} style={{ marginTop: "2rem" }} />
  //   </SkeletonTheme>
  // );
  const { translate } = useI18N();
  return (
    <>
      <AnimatePresence>
        <div className={styles._container}>
          <div className={styles._content}>
            {load ? (
              <SkeletonTheme color="#d3d3d3" highlightColor="#706f6f">
                <div className={styles._content} style={{ margin: "0" }}>
                  <Skeleton
                    count={2}
                    width={340}
                    height={30}
                    style={{
                      margin: "1rem",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  />
                  <Skeleton
                    width={340}
                    height={70}
                    style={{ marginTop: "2rem" }}
                  />
                  <Skeleton
                    width={150}
                    height={150}
                    style={{ marginTop: "2rem" }}
                  />
                </div>
              </SkeletonTheme>
            ) : (
              <>
                <h1 className={styles._h1}>{title}</h1>
                <h2 className={styles._h2}>{subtitle}</h2>
                <p className={styles._p}>{translate("DESCRIPTION")}</p>
                <figure className={styles._figure}>
                  <Image
                    src={url}
                    alt={title}
                    className={styles._img}
                    layout="responsive"
                    width={150}
                    height={150}
                  />
                </figure>
              </>
            )}
            <ArrowAnimation
              style={{ zIndex: "3", marginRight: 0 }}
              route={() => router.push("/skills")}
            />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}
