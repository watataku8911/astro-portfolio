import React from "react";
import styles from "./Footer.module.css";

import { ReactSVG } from "react-svg";

import IconTw from "/icon/icon_twitter_black.svg";
import IconInst from "/icon/ico_inst_foot.svg";
import IconGit from "/icon/github_logo.svg";

import IconTwWhite from "/icon/icon_twitter_white.svg";
import IconInstWhite from "/icon/ico_inst_foot_white.svg";
import IconGitWhite from "/icon/github_logo_white.svg";

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
          <a href="#top">Back to top</a>
        </ul>
      </div>
      <div className={styles["footer__copy"]}>
        <small className={styles["grid"]}>&copy;2022 Watataku.</small>
        <div className={`${styles["footer__copy__icons"]} ${styles["grid"]}`}>
          <a href="https://twitter.com/watataku8911" target="_blank">
            <img src={IconTw} alt="twitter" width="20" height="20" />
          </a>

          <a href="https://instagram.com/watataku8911" target="_blank">
            <img src={IconInst} alt="Instagram" width="20" height="20" />
          </a>

          <a href="https://github.com/watataku8911" target="_blank">
            <img src={IconGit} alt="github" width="20" height="20" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
