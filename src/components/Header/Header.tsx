import React from "react";
import styles from "./Header.module.css";
import Switch from "./Switch/Switch";
import HumbergerMenu from "./HumbergerMenu/HumbergerMenu";

const Header = () => {
  return (
    <header className={`${styles["header"]} ${styles["grid"]}`}>
      <div className={styles["header__logo"]}>
        <a className={styles["text-color"]} href="/">
          T.W
        </a>
      </div>

      <div className={styles["header__switcher"]}>
        <Switch />
      </div>

      <HumbergerMenu />
    </header>
  );
};
export default Header;
