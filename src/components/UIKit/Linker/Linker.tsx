import React from "react";
import styles from "./Linker.module.css";

type Props = {
  href: string;
  target: "_blank" | "_self" | "_top" | "_parent";
  msg: string;
};
const Linker = (props: Props) => {
  return (
    <a
      className={styles["linker__title"]}
      href={props.href}
      target={props.target}
    >
      {props.msg}
    </a>
  );
};
export default Linker;
