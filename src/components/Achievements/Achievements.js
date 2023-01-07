import React, { useState } from "react";
import styles from "./Achievements.module.css";
import InputControl from "../InputControl/InputControl.js";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  return (
    <div>
      <div className={styles.detail}>
        <div className={styles.column}>
          <label>List your achievements</label>
          <InputControl placeholder="Line 1" />
          <InputControl placeholder="Line 2" />
          <InputControl placeholder="Line 3" />
          <InputControl placeholder="Line 4" />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
