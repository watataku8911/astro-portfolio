import React from "react";
import styles from "./Footer.module.css";

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
            <a
              href="https://watataku-blog.vercel.app"
              target="_blank"
              className={styles["text-color"]}
            >
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
      </div>
    </footer>
  );
};
export default Footer;
