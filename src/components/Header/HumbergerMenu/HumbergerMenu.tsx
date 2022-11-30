import React, { useState } from "react";
import styles from "./HumbergerMenu.module.css";

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
      </nav>
    </>
  );
};
export default HumbergerMenu;
