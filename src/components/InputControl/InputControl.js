import React from "react";
import styles from "./InputControl.module.css";

function InputControl({ label, ...props }) {
  return (
    <div className={styles.container}>
      <div className={styles.inputtitle}>
        {label && <span>{label}</span>}
        &nbsp;
        {props.imp === "true" && <span style={{ fontWeight:"bold",color: "red" }}>*</span>}
      </div>
      <input type="text" {...props} />
    </div>
  );
}

export default InputControl;
