import React, { useState } from "react";
import styles from "./Skills.module.css";

import InputControl from "../InputControl/InputControl.js";
import Banner from "../Banner/Banner.js";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [current, setCurrent] = useState("");
  const [flag, setFlag] = useState(false);

  const handleSubmit = () => {
    if (current !== "") {
      setSkills((skills) => [...skills, current]);
      setCurrent("");
    } else {
      setFlag(true);
      setTimeout(() => {
        setFlag(false);
      }, 2000);
    }
  };

  return (
    <>
      {flag && <Banner title="Field is mandatory !" />}

      <div>
        <div className={styles.detail}>
          <div className={styles.column}>
            <label>Add your Skills 🎗️!!</label>
            <InputControl
              placeholder="Add your Skill"
              value={current}
              onChange={(e) => {
                setCurrent(e.target.value);
              }}
            />
            <button
              className={styles.achButton}
              disabled={Skills.length === 8}
              onClick={handleSubmit}
            >
              Add Skill
            </button>
          </div>
        </div>
      </div>

      <div className="achheader">Listed Skills</div>
      <div className={styles.listSkills}>
        {skills.length > 0 &&
          skills?.map((val, key) => (
            <div className={styles.oneSkill} key={key}>
              🎯 {val}
            </div>
          ))}
      </div>
      {skills.length === 0 && (
        <div className={styles.noSkills}>
          ❌ You have not added any Achievement
        </div>
      )}
    </>
  );
};

export default Skills;
