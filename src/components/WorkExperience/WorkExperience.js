import React from "react";
import styles from "./WorkExperience.module.css";
import InputControl from "../InputControl/InputControl.js";
import { useState } from "react";
const WorkExperience = () => {
  const tempwork = {
    title: "",
    CompanyName: "",
    CertificationLink: "",
    Location: "",
    StartDate: "",
    EndDate: "",
    WorkDesc: "",
  };
  const [values, setValues] = useState([
    {
      title: "",
      CompanyName: "",
      CertificationLink: "",
      Location: "",
      StartDate: "",
      EndDate: "",
      WorkDesc: "",
    },
  ]);
  const IncreaseWorkCount = () => {
    setValues((values) => [...values, tempwork]);
  };
  return (
    <div className={styles.detail}>
      <div className={styles.workheader}>
        <div className={styles.addheader} onClick={() => IncreaseWorkCount()}>
          <span className={styles.addicon}>+</span>
          Add Work Experience
        </div>
      </div>
      {values?.map((key, index) => (
        <div className={styles.workExpBody} key={key}>
          <div key={key} className={styles.header}>
            Work Experience {index + 1}
          </div>
          <div className={styles.row}>
            <InputControl
              label="Title"
              placeholder="Enter title eg. Frontend developer"
            />
            <InputControl
              label="Company Name"
              placeholder="Enter company name eg. amazon"
            />
          </div>
          <div className={styles.row}>
            <InputControl
              label="Certificate Link"
              placeholder="Enter certificate link"
            />
            <InputControl
              label="Location"
              placeholder="Enter location eg. Remote"
            />
          </div>
          <div className={styles.row}>
            <InputControl
              label="Start Date"
              type="date"
              placeholder="Enter start date of work"
            />
            <InputControl
              label="End Date"
              type="date"
              placeholder="Enter end date of work"
            />
          </div>

          <div className={styles.column}>
            <label>Enter work description</label>
            <textarea
              className={styles.textarea}
              placeholder="Enter your work Description"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
