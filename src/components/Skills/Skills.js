import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("skills")) || null;
    if (data) setSkills(data);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const data = JSON.stringify(skills);
      localStorage.setItem("skills", data);
    }, 10);
  }, [skills]);
  const handleDelete = (id) => {
    setSkills((current) => current.filter((item, index) => index != id));
  };

  return (
    <>
      {flag && <Banner title="Field is mandatory !" />}

      <div>
        <div className={styles.detail}>
          <div className={styles.column}>
            <label>Add your skills 🎗️!!</label>
            <InputControl
              placeholder="Add your Skill"
              value={current}
              onChange={(e) => {
                setCurrent(e.target.value);
              }}
            />
            <button
              className={styles.skillButton}
              disabled={skills.length === 36}
              onClick={handleSubmit}
            >
              Add Skill
            </button>
          </div>
        </div>
      </div>
      <div className={styles.achHeader}>Listed skills</div>
      <div className={styles.listskills}>
        {skills.length > 0 &&
          skills?.map((item, index) => (
            <div className={styles.skillbox}>
              <span className={styles.text}>{item}</span>
              <span
                className={styles.deleteIcon}
                onClick={() => handleDelete(index)}
              >
                ❌
              </span>
            </div>
          ))}
      </div>
      {skills.length === 0 && (
        <div className={styles.noskills}>❌ You have not added any Skills</div>
      )}
    </>
  );
};

export default Skills;
