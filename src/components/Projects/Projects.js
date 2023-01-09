import React, { useState } from "react";
import styles from "./Projects.module.css";
import InputControl from "../InputControl/InputControl.js";
import Banner from "../Banner/Banner.js";

const Projects = () => {
  const tempProject = {
    title: "",
    overview: "",
    deployedLink: "",
    githubLink: "",
    desc: "",
  };
  const [banner, setBanner] = useState(false);
  const [values, setValues] = useState([
    {
      title: "",
      overview: "",
      deployedLink: "",
      githubLink: "",
      desc: "",
    },
  ]);
  const IncreaseProjectCount = () => {
    if (values.length === 4) {
      setBanner(true);
      setTimeout(() => {
        setBanner(false);
      }, 3000);
      return;
    }
    setValues((values) => [...values, tempProject]);
  };
  return (
    <>
      {banner && <Banner title="You have added Enough Projects !" />}
      <div className={styles.detail}>
        <div className={styles.projectheader}>
          <div
            className={styles.addheader}
            onClick={() => IncreaseProjectCount()}
          >
            <span className={styles.addicon}>+</span>
            Add Projects
          </div>
        </div>
        {values?.map((key, index) => (
          <div className={styles.ProjectBody} key={key}>
            <div className={styles.header}>
              🔖 Project {index + 1}
            </div>
            <div className={styles.row}>
              <InputControl
                label="Title"
                placeholder="Enter title eg. Chat app"
                value={values[index].title}
                onChange={(e) => {
                  let newarr = [...values];
                  newarr[index].title = e.target.value;
                  setValues(newarr);
                }}
              />
            </div>
            <InputControl
              label="Overview"
              placeholder="Enter basic overview of project"
              value={values[index].overview}
              onChange={(e) => {
                let newarr = [...values];
                newarr[index].overview = e.target.value;
                setValues(newarr);
              }}
            />
            <div className={styles.row}>
              <InputControl
                label="Deployed Link"
                type="url"
                placeholder="Enter deployed link of project"
                value={values[index].deployedLink}
                onChange={(e) => {
                  let newarr = [...values];
                  newarr[index].deployedLink = e.target.value;
                  setValues(newarr);
                }}
              />
              <InputControl
                label="Github Link"
                type="url"
                placeholder="Enter github link of project"
                value={values[index].githubLink}
                onChange={(e) => {
                  let newarr = [...values];
                  newarr[index].githubLink = e.target.value;
                  setValues(newarr);
                }}
              />
            </div>
            <div className={styles.column}>
              <label>Enter project description</label>
              <textarea
                className={styles.textarea}
                placeholder="Enter your project Description"
                value={values[index].desc}
                onChange={(e) => {
                  let newarr = [...values];
                  newarr[index].desc = e.target.value;
                  setValues(newarr);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
