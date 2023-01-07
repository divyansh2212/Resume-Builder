import React, { useState } from "react";
import styles from "./Summary.module.css";

const Summary = () => {
  const [summary, setSummary] = useState("");

  return (
    <div className={styles.detail}>
      <label>Enter your summary</label>
      <textarea
        className={styles.textarea}
        placeholder="Enter your summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
    </div>
  );
};

export default Summary;
