import React from "react";
import styles from "./Banner.module.css";


const Banner = (props) => {
  return <div className={styles.errbanner}>{props.title}</div>;
};

export default Banner;
