import React, { useState } from "react";
import styles from "./Education.module.css";
import InputControl from "../InputControl/InputControl.js";

const Education = () => {
  const [education, setEducation] = useState({
    title: "",
    college: "",
    startDate: Date.now(),
    endDate: Date.now(),
  });

  return (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label="Title" placeholder="Enter title eg. B-tech" />
      </div>
      <InputControl
        label="College/School Name"
        placeholder="Enter name of your college/school"
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
        />
      </div>
    </div>
  );
};

export default Education;
