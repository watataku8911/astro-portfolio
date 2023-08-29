import React from "react";
import styles from "./IconButton.module.css";

type Props = {
  href: string;
  icon: string;
  alt: string;
};
const IconButton = (props: Props) => {
  return (
    <a
      className={styles.link}
      href={props.href}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <p className={styles["icon-button"]}>
        <img className={styles.icon} src={props.icon} alt={props.alt} />
      </p>
    </a>
  );
};
export default IconButton;
