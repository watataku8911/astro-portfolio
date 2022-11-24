import React, { useEffect, useState } from "react";
import styles from "./Switch.module.css";

const Switch = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

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
    const theme = window.sessionStorage.getItem("theme");
    console.log(theme);
    if (theme === "dark") {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  return (
    <form action="#">
      <label className={styles["switch"]}>
        <input type="checkbox" checked={darkTheme} onChange={handleToggle} />
        <span className={styles["slider"]}></span>
      </label>
    </form>
  );
};
export default Switch;
