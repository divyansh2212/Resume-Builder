import React, { useState, useRef } from "react";
import styles from "../Body/Body.module.css";
import { ArrowDown } from "react-feather";
import ReactToPrint from "react-to-print";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";

const Body = () => {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = [
    "Basic Info",
    "Work Experience",
    "Projects",
    "Education",
    "Achievements",
    "Skills",
  ];
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item, cursor: "pointer" }}
              className={`${styles.color} ${
                activeColor === item ? styles.active : ""
              }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className={styles.main}>
        <Editor sections={sections} />
        <Resume
          ref={resumeRef}
          sections={sections}
          activeColor={activeColor}
        />
      </div>
    </div>
  );
};

export default Body;
