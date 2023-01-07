import React, { useState } from "react";
import InputControl from "../InputControl/InputControl";
import styles from "./BasicInfo.module.css";

const BasicInfo = () => {
  const [basicInfo, setBasicInfo] = useState({
    name: "",
    title: "",
    linkedin: "",
    github: "",
    email: "",
    phone: "",
  });

  return (
    <div>
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControl
            label="Name"
            type="text"
            placeholder="Enter your full name eg. Aashu"
            value={basicInfo.name}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, name: e.target.value })
            }
          />
          <InputControl
            label="Title"
            value={basicInfo.title}
            type="text"
            placeholder="Enter your title eg. Frontend developer"
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, title: e.target.value })
            }
          />
        </div>
        <div className={styles.row}>
          <InputControl
            label="Linkedin Link"
            type="url"
            placeholder="Enter your linkedin profile link"
            value={basicInfo.linkedin}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, linkedin: e.target.value })
            }
          />
          <InputControl
            label="Github Link"
            type="url"
            placeholder="Enter your github profile link"
            value={basicInfo.github}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, github: e.target.value })
            }
          />
        </div>
        <div className={styles.row}>
          <InputControl
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={basicInfo.email}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, email: e.target.value })
            }
          />
          <InputControl
            label="Enter phone"
            placeholder="Enter your phone number"
            type="number"
            value={basicInfo.phone}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, phone: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
