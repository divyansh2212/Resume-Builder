import React, { useState } from "react";
import styles from "../Body/Body.module.css";
import { ArrowDown } from "react-feather";
import Editor from "../Editor/Editor";

const Body = () => {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = [
    "Basic Info",
    "Work Experience",
    "Projects",
    "Education",
    "Achievements",
    "Skills",
    "Other",
  ];

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={styles.color}
            />
          ))}
        </div>
        <button>
          Download <ArrowDown />
        </button>
      </div>
      <Editor sections={sections} />
    </div>
  );
};

export default Body;
