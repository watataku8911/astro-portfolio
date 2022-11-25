import React, { useState } from "react";
import styles from "./Header.module.css";
import Switch from "./Switch/Switch";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className={`${styles["header"]} ${styles["grid"]}`} id="top">
      {open}
      <div
        className={`${styles["header__inner"]} ${styles["grid"]} ${styles["between"]}`}
      >
        <div className={styles["header__logo"]}>
          <a className={styles["text-color"]} href="/">
            T.W
          </a>
        </div>
        <ul className={`${styles["header__navi"]} ${styles["grid"]}`}>
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
          <li>
            <Switch />
          </li>
        </ul>

        <div className={`${styles["headder__buttons"]} ${styles["grid"]}`}>
          <Switch />
          <div
            className={`${styles["navToggle"]} ${
              open ? styles["is-active"] : ""
            }`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
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
    </header>
  );
};
export default Header;
