import React from "react";
import styles from "./Projects.module.css";
import InputControl from "../InputControl/InputControl.js";

const Projects = () => {
  return (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label="Title" placeholder="Enter title eg. Chat app" />
      </div>
      <InputControl
        label="Overview"
        placeholder="Enter basic overview of project"
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter deployed link of project"
        />
        <InputControl
          label="Github Link"
          placeholder="Enter github link of project"
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <textarea
          className={styles.textarea}
          placeholder="Enter your project Description"
        />
      </div>
    </div>
  );
};

export default Projects;
