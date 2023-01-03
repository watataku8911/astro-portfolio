import React from "react";

import styles from "./IconButton.module.css";

type Props = {
  href: string;
  target: "_blank" | "_self" | "_top" | "_parent";
  icon: string;
  alt: string;
};
const IconButton = (props: Props) => {
  return (
    <a className={styles.link} href={props.href} target={props.target}>
      <p className={styles["icon-button"]}>
        <img className={styles.icon} src={props.icon} alt={props.alt} />
      </p>
    </a>
  );
};
export default IconButton;
