import React, { useState } from "react";
import styles from "./HumbergerMenu.module.css";

import { ReactSVG } from "react-svg";

import IconTw from "/icon/icon_twitter_black.svg";
import IconInst from "/icon/ico_inst_foot.svg";
import IconGit from "/icon/github_logo_small.svg";

const HumbergerMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={`${styles["navToggle"]} ${open ? styles["is-active"] : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`${styles["navi"]} ${open ? styles["is-open"] : ""}`}>
        <ul className={styles["navi__wrap"]}>
          <li>
            <a className={styles["text-color"]} href="/about">
              About me
            </a>
          </li>
          <li>
            <a className={styles["text-color"]} href="/work">
              Works
            </a>
          </li>
          <li>
            <a className={styles["text-color"]} href="/blog">
              Tech Blogs
            </a>
          </li>
        </ul>

        <div className={`${styles["navi__copy__icons"]} ${styles["grid"]}`}>
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
      </nav>
    </>
  );
};
export default HumbergerMenu;
