import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppContext } from "@context/state";
import styles from "./Navbar.module.css";
import { HiOutlineTranslate } from "react-icons/hi";
import { GrPowerShutdown } from "react-icons/gr";

import logo from "@img/LOGO-ASMZOOM.webp";

export default function Navbar({ switchTheme }) {
  const { pathname, locale, locales } = useRouter();
  const refHamburguer = useRef(null);
  const refContainerLinks = useRef(null);
  const { translate } = useAppContext();

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
      <div className={styles._wrapPowerSwitch} onClick={switchTheme}>
        <div className={styles.power_switch}>
          <div className={styles.button}>
            <GrPowerShutdown size={50} className={styles.power} />
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <nav className={styles._nav}>
        <figure className={styles._logo_figure}>
          <Link href="/" passHref>
            <a>
              <Image
                src={logo.src}
                alt="Logo"
                height="30px"
                width="30px"
                blurDataURL={logo.blurDataURL}
              />
            </a>
          </Link>
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
