import React, { useEffect, useState } from "react";
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
  const [emptyFlag, setEmptyFlag] = useState(false);
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
    for (let i = 0; i < values.length; i++) {
      if (values[i].title !== "" && values[i].desc !== "") {
      } else {
        setEmptyFlag(true);
        setTimeout(() => {
          setEmptyFlag(false);
        }, 2000);

        return;
      }
    }
    if (values.length === 4) {
      setBanner(true);
      setTimeout(() => {
        setBanner(false);
      }, 3000);
      return;
    }
    setValues((values) => [...values, tempProject]);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("projects"));
    if (data) setValues(data);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const data = JSON.stringify(values);
      localStorage.setItem("projects", data);
    }, 10);
  }, [values]);
  const handleDelete = (id) => {
    if (values.length === 1) {
      return;
    }
    setValues((current) => current.filter((item, index) => index != id));
  };
  return (
    <>
      {emptyFlag && <Banner title="* marked Fields are mandatory !!" />}
      {banner && <Banner title="You have added enough Projects !" />}
      <div className={styles.detail}>
        <div className={styles.projectheader}>
          <button
            className={styles.addheader}
            onClick={() => IncreaseProjectCount()}
          >
            <span className={styles.addicon}>+</span>
            Add Projects
          </button>
        </div>
        {values?.map((key, index) => (
          <div className={styles.ProjectBody} key={key}>
            <div className={styles.header}>
              Project {index + 1} &nbsp;&nbsp;&nbsp;
              {values.length > 1 && (
                <span
                  className={styles.deleteIcon}
                  onClick={() => handleDelete(index)}
                >
                  ❌
                </span>
              )}
            </div>
            <div className={styles.row}>
              <InputControl
                label="Title"
                imp="true"
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
              <label>
                Enter project description &nbsp;
                <span style={{ color: "red", fontWeight: "Bold" }}>*</span>
              </label>
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
