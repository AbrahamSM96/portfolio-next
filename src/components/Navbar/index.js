import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useAppContext } from "../../context/state";
import styles from "./Navbar.module.css";
import { HiOutlineTranslate } from "react-icons/hi";

export default function Navbar({ switchTheme }) {
  const { pathname, locale, locales } = useRouter();
  const refHamburguer = useRef(null);
  const refContainerLinks = useRef(null);
  const { data, load, translate } = useAppContext();
  const { hero = {} } = data;
  const { url = "" } = hero;

  const toggleHamburguer = () => {
    refHamburguer.current.classList.toggle(styles._active_hamburguer);
    refContainerLinks.current.classList.toggle(styles._active_container);
  };
  const toggleCloseMenu = () => {
    refContainerLinks.current.getElementsByTagName("a");
    // console.log(refContainerLinks.current.getElementsByTagName("a"));
    refHamburguer.current.classList.remove(styles._active_hamburguer);
    refContainerLinks.current.classList.remove(styles._active_container);
  };
  const localesTranslate = locales.filter((loc) => loc !== locale);

  const ToggleTheme = () => {
    return (
      <div className={styles._wrapPowerSwitch} onClick={() => switchTheme()}>
        <div className={styles.power_switch}>
          <input type="checkbox" />
          <div className={styles.button}>
            <svg className={styles.power_off}>
              <use xlinkHref="#line" className={styles.line} />
              <use xlinkHref="#circle" className={styles.circle} />
            </svg>
            <svg className={styles.power_on}>
              <use xlinkHref="#line" className={styles.line} />
              <use xlinkHref="#circle" className={styles.circle} />
            </svg>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 150"
            id="line"
          >
            <line x1="75" y1="34" x2="75" y2="58" />
          </symbol>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 150"
            id="circle"
          >
            <circle cx="75" cy="80" r="35" />
          </symbol>
        </svg>
      </div>
    );
  };

  return (
    <>
      <nav className={styles._nav}>
        <figure className={styles._logo_figure}>
          {load ? (
            <SkeletonTheme color="#d3d3d3" highlightColor="#706f6f">
              <Skeleton height={30} width={30} />
            </SkeletonTheme>
          ) : (
            <>
              {url.length > 0 && (
                <Link href="/" passHref>
                  <Image
                    src={url}
                    alt="Logo"
                    className={styles._logo_img}
                    height={30}
                    width={30}
                  />
                </Link>
              )}
            </>
          )}
        </figure>
        <div
          className={styles._container_links}
          ref={refContainerLinks}
          onClick={toggleCloseMenu}
        >
          {translate("TITLES_NAV").map(({ href, navTitle }) => {
            const activeStyleNav = pathname === href ? styles._linksPath : "";
            return (
              <Link href={href} key={`id-${navTitle}`}>
                <a className={activeStyleNav}>{navTitle}</a>
              </Link>
            );
          })}
          <div className={styles._translate_button}>
            <Link href="/" locale={localesTranslate[0]}>
              <a>
                {localesTranslate[0]}
                <HiOutlineTranslate size={28} />
              </a>
            </Link>
          </div>
          <ToggleTheme />
        </div>
        <div
          className={styles._hamburguer}
          onClick={() => toggleHamburguer()}
          ref={refHamburguer}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
}
