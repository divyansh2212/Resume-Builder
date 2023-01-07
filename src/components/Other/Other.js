import React, { useState } from "react";
import styles from "./Other.module.css";

const Other = () => {
  const [other, setOther] = useState("");

  return (
    <div className={styles.detail}>
      <label>Enter other details</label>
      <textarea
        className={styles.textarea}
        placeholder="Enter other details"
        value={other}
        onChange={(e) => setOther(e.target.value)}
      />
    </div>
  );
};

export default Other;
