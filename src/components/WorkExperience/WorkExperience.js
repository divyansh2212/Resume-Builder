import React from "react";
import styles from "./WorkExperience.module.css";
import InputControl from "../InputControl/InputControl.js";
import { useState } from "react";
import Banner from "../Banner/Banner.js";
const WorkExperience = () => {
  const tempproject = {
    title: "",
    companyName: "",
    certificationLink: "",
    location: "",
    startDate: "",
    endDate: "",
    workDesc: "",
  };
  const [values, setValues] = useState([
    {
      title: "",
      companyName: "",
      certificationLink: "",
      location: "",
      startDate: "",
      endDate: "",
      workDesc: "",
    },
  ]);
  const [flag, setFlag] = useState(false);
  const IncreaseWorkCount = () => {
    if (values.length === 4) {
      setFlag(true);
      setTimeout(() => {
        setFlag(false);
      }, 2000);

      return;
    }
    setValues((values) => [...values, tempproject]);
  };

  return (
    <>
      {flag && <Banner title="You have added Enough Work Experiences !" />}
      <div className={styles.detail}>
        <div className={styles.workHeader}>
          <div className={styles.addHeader} onClick={() => IncreaseWorkCount()}>
            <span className={styles.addicon}>+</span>
            Add Work Experience
          </div>
        </div>
        {values?.map((key, index) => (
          <div className={styles.workExpBody} key={key}>
            <div key={key} className={styles.header}>
              🧑‍🏭 Work Experience {index + 1}
            </div>
            <div className={styles.row}>
              <InputControl
                label="Title"
                placeholder="Enter title eg. Frontend developer"
                value={values[index].title}
                onChange={(e) => {
                  let newarr = [...values];
                  newarr[index].title = e.target.value;
                  setValues(newarr);
                }}
              />
              <InputControl
                label="Company Name"
                placeholder="Enter company name eg. amazon"
                value={values[index].companyName}
                onChange={(e) => {
                  let newarr = [...values];
                  newarr[index].companyName = e.target.value;
                  setValues(newarr);
                }}
              />
            </div>
            <div className={styles.row}>
              <InputControl
                label="Certificate Link"
                placeholder="Enter certificate link"
                value={values[index].certificationLink}
                onChange={(e) => {
                  let newarr = [...values];
                  newarr[index].certificationLink = e.target.value;
                  setValues(newarr);
                }}
              />
              <InputControl
                label="location"
                placeholder="Enter location eg. Remote"
                value={values[index].location}
                onChange={(e) => {
                  let newarr = [...values];
                  newarr[index].location = e.target.value;
                  setValues(newarr);
                }}
              />
            </div>
            <div className={styles.row}>
              <InputControl
                label="Start Date"
                type="date"
                placeholder="Enter start date of work"
                value={values[index].startDate}
                onChange={(e) => {
                  let newarr = [...values];
                  newarr[index].startDate = e.target.value;
                  setValues(newarr);
                }}
              />
              <InputControl
                label="End Date"
                type="date"
                placeholder="Enter end date of work"
                value={values[index].endDate}
                onChange={(e) => {
                  let newarr = [...values];
                  newarr[index].endDate = e.target.value;
                  setValues(newarr);
                }}
              />
            </div>

            <div className={styles.column}>
              <label>Enter work description</label>
              <textarea
                className={styles.textarea}
                placeholder="Enter your work Description"
                value={values[index].workDesc}
                onChange={(e) => {
                  let newarr = [...values];
                  newarr[index].workDesc = e.target.value;
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

export default WorkExperience;
