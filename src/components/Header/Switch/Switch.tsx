import React, { useEffect, useState } from "react";
import styles from "./Switch.module.css";

const Switch = () => {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);

  const handleToggle = (e: any) => {
    setDarkTheme(e.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const theme = (() => {
      if (
        typeof localStorage !== "undefined" &&
        localStorage.getItem("theme")
      ) {
        return localStorage.getItem("theme");
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    })();

    if (theme != null) {
      if (theme === "light") {
        setDarkTheme(false);
      } else {
        setDarkTheme(true);
      }

      window.localStorage.setItem("theme", theme);
    }
  }, []);

  return (
    <form action="#">
      <label className={styles["switch"]}>
        <input
          type="checkbox"
          aria-label="Switch"
          checked={darkTheme ?? false}
          onChange={handleToggle}
        />
        <span className={styles["slider"]}></span>
      </label>
    </form>
  );
};
export default Switch;
