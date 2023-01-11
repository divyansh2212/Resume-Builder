import React, { useEffect } from "react";
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
  const [emptyFlag, setEmptyFlag] = useState(false);
  const IncreaseWorkCount = () => {
    for (let i = 0; i < values.length; i++) {
      if (
        values[i].title !== "" &&
        values[i].companyName !== "" &&
        values[i].location !== "" &&
        values[i].startDate !== "" &&
        values[i].endDate !== "" &&
        values[i].workDesc !== ""
      ) {
      } else {
        setEmptyFlag(true);
        setTimeout(() => {
          setEmptyFlag(false);
        }, 2000);

        return;
      }
    }
    if (values.length === 4) {
      setFlag(true);
      setTimeout(() => {
        setFlag(false);
      }, 2000);

      return;
    }

    setValues((values) => [...values, tempproject]);
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("workExp"));
    if (data) setValues(data);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const data = JSON.stringify(values);
      localStorage.setItem("workExp", data);
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
      {flag && <Banner title="You have added Enough Work Experiences !" />}
      <div className={styles.detail}>
        <div className={styles.workHeader}>
          <button className={styles.addHeader} onClick={() => IncreaseWorkCount()}>
            <span className={styles.addicon}>+</span>
            Add Work Experience
          </button>
        </div>
        {values?.map((key, index) => (
          <div className={styles.workExpBody} key={key}>
            <div key={key} className={styles.header}>
              Work Experience {index + 1}
              &nbsp;&nbsp;&nbsp;
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
                placeholder="Enter title eg. Frontend developer"
                imp="true"
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
                imp="true"
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
                label="Location"
                placeholder="Enter location eg. Remote"
                imp="true"
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
                imp="true"
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
                imp="true"
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
              <label>Enter work description &nbsp;<span style={{color:"red",fontWeight:"Bold"}}>*</span></label>
              <textarea
                className={styles.textarea}
                placeholder="Enter your work Description in points by pressing enter"
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
