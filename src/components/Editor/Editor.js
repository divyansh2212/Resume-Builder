import React, { useEffect, useState } from "react";
import styles from "./Editor.module.css";
import BasicInfo from "../BasicInfo/BasicInfo";
import WorkExperience from "../WorkExperience/WorkExperience";
import Projects from "../Projects/Projects.js";
import Education from "../Education/Education.js";
import Achievements from "../Achievements/Achievements.js";
import Summary from "../Summary/Summary";
import Other from "../Other/Other";

function Editor(props) {
  const sections = props.sections;

  const [activeSectionKey, setActiveSectionKey] = useState(sections[0]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {sections?.map((key) => (
          <div
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => setActiveSectionKey(key)}
          >
            {key}
          </div>
        ))}
      </div>
      <div className={styles.bodyContent}>
        {activeSectionKey === "Basic Info" && <BasicInfo />}
        {activeSectionKey === "Work Experience" && <WorkExperience />}
        {activeSectionKey === "Projects" && <Projects />}
        {activeSectionKey === "Education" && <Education />}
        {activeSectionKey === "Achievements" && <Achievements />}
        {activeSectionKey === "Summary" && <Summary />}
        {activeSectionKey === "Other" && <Other />}
      </div>
    </div>
  );
}

export default Editor;