import React, { useState } from "react";
import styles from "./Education.module.css";
import InputControl from "../InputControl/InputControl.js";
import Banner from "../Banner/Banner.js";

const Education = () => {
  const tempEducation = {
    title: "",
    college: "",
    startDate: Date.now(),
    endDate: Date.now(),
    cgpa: "",
  };
  const [values, setValues] = useState([
    {
      title: "",
      college: "",
      startDate: Date.now(),
      endDate: Date.now(),
      cgpa: "",
    },
  ]);
  const [flag, setFlag] = useState(false);
  const increaseEducationCount = () => {
    if (values.length === 3) {
      setFlag(true);
      setTimeout(() => {
        setFlag(false);
      }, 2000);

      return;
    }
    setValues((values) => [...values, tempEducation]);
  };

  return (
    <>
      {flag && <Banner title="You have added enough Educations!" />}
      <div className={styles.detail}>
        <div className={styles.educationHeader}>
          <div
            className={styles.addHeader}
            onClick={() => increaseEducationCount()}
          >
            <span className={styles.addIcon}>+</span>
            Add Education
          </div>
        </div>
        {values?.map((key, index) => (
          <div className={styles.educationBody} key={key}>
            <div className={styles.header}>📚 Education {index + 1}</div>
            <div className={styles.row}>
              <InputControl
                label="Title"
                placeholder="Enter title eg. B-tech"
                value={values[index].title}
                onChange={(e) => {
                  let newarr = [...values];
                  newarr[index].title = e.target.value;
                  setValues(newarr);
                }}
              />
            </div>
            <InputControl
              label="College/School Name"
              placeholder="Enter name of your college/school"
              value={values[index].college}
              onChange={(e) => {
                let newarr = [...values];
                newarr[index].college = e.target.value;
                setValues(newarr);
              }}
            />
            <div className={styles.row}>
              <InputControl
                label="Start Date"
                type="date"
                placeholder="Enter start date of this education"
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
                placeholder="Enter end date of this education"
                value={values[index].endDate}
                onChange={(e) => {
                  let newarr = [...values];
                  newarr[index].endDate = e.target.value;
                  setValues(newarr);
                }}
              />
            </div>
            <div className={styles.row}>
              <InputControl
                label="CGPA"
                type="number"
                placeholder="Enter your cgpa"
                value={values[index].cgpa}
                onChange={(e) => {
                  let newarr = [...values];
                  newarr[index].cgpa = e.target.value;
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

export default Education;
