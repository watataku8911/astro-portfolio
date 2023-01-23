import React from "react";
import styles from "./Footer.module.css";

import { ReactSVG } from "react-svg";

import IconTw from "/icon/icon_twitter_black.svg";
import IconInst from "/icon/ico_inst_foot.svg";
import IconGit from "/icon/github_logo_small.svg";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={`${styles["footer__inner"]} ${styles["grid"]}`}>
        <div className={styles["footer__logo"]}>
          <a className={styles["text-color"]} href="/">
            T.W
          </a>
        </div>
        <ul className={`${styles["footer__link"]} ${styles["grid"]}`}>
          <li>
            <a href="/about" className={styles["text-color"]}>
              About&nbsp;me
            </a>
          </li>
          <li>
            <a href="/work" className={styles["text-color"]}>
              Works
            </a>
          </li>
          <li>
            <a href="/blog" className={styles["text-color"]}>
              Tech&nbsp;blogs
            </a>
          </li>
          <li>
            <a href="#top" className={styles.goTop}>
              (Back To Top)
            </a>
          </li>
        </ul>
      </div>

      <div className={`${styles["footer__copy"]} ${styles["grid"]}`}>
        <small>&copy;2022 Watataku.</small>
        <div className={`${styles["footer__copy__icons"]} ${styles["grid"]}`}>
          <a
            href="https://twitter.com/watataku8911"
            aria-label="Twitter"
            target="_blank"
          >
            <ReactSVG style={{ width: "25px", height: "25px" }} src={IconTw} />
          </a>

          <a
            href="https://instagram.com/watataku8911"
            aria-label="Instagram"
            target="_blank"
          >
            <ReactSVG
              style={{ width: "25px", height: "25px" }}
              src={IconInst}
            />
          </a>

          <a
            href="https://github.com/watataku8911"
            aria-label="Github"
            target="_blank"
          >
            <ReactSVG style={{ width: "25px", height: "25px" }} src={IconGit} />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
