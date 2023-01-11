import React, { useEffect, useState } from "react";
import styles from "./Education.module.css";
import InputControl from "../InputControl/InputControl.js";
import Banner from "../Banner/Banner.js";

const Education = () => {
  const tempEducation = {
    title: "",
    college: "",
    startDate: "",
    endDate: "",
    cgpa: "",
  };
  const [values, setValues] = useState([
    {
      title: "",
      college: "",
      startDate: "",
      endDate: "",
      cgpa: "",
    },
  ]);
  const [flag, setFlag] = useState(false);
  const [emptyFlag,setEmptyFlag]=useState(false);
  const increaseEducationCount = () => {
    for (let i = 0; i < values.length; i++) {
      if (
        values[i].title !== "" &&
        values[i].college !== "" &&
        values[i].startDate !== "" &&
        values[i].endDate !== "" &&
        values[i].cgpa !== ""
      ) {
        
      }
      else
      {
        setEmptyFlag(true);
        setTimeout(() => {
          setEmptyFlag(false);
        }, 2000);

        return;
      }
    }
    if (values.length === 3) {
      setFlag(true);
      setTimeout(() => {
        setFlag(false);
      }, 2000);

      return;
    }
    setValues((values) => [...values, tempEducation]);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("education"));
    if (data) setValues(data);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const data = JSON.stringify(values);
      localStorage.setItem("education", data);
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
      {flag && <Banner title="You have added enough Educations!" />}
      <div className={styles.detail}>
        <div className={styles.educationHeader}>
          <button
            className={styles.addHeader}
            onClick={() => increaseEducationCount()}
          >
            <span className={styles.addIcon}>+</span>
            Add Education
          </button>
        </div>
        {values?.map((key, index) => (
          <div className={styles.educationBody} key={key}>
            <div className={styles.header}>
              Education {index + 1}
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
                placeholder="Enter title eg. B-tech"
                imp="true"
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
              imp="true"
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
                imp="true"
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
                imp="true"
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
                imp="true"
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
