import React, { useEffect, useState } from "react";
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
    codechef: "",
    codeforces: "",
    leetcode: "",
    gfg: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("basicInfo"));
    if (data) setBasicInfo(data);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const data = JSON.stringify(basicInfo);
      localStorage.setItem("basicInfo", data);
    }, 10);
  }, [basicInfo]);

  return (
    <div>
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControl
            label="Name"
            type="text"
            imp="true"
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
            label="Linkedin Profile"
            type="text"
            placeholder="Enter your Linkedin profile username"
            value={basicInfo.linkedin}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, linkedin: e.target.value })
            }
          />
          <InputControl
            label="GitHub Profile"
            type="text"
            placeholder="Enter your GitHub username"
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
            imp = "true"
            placeholder="Enter your email"
            value={basicInfo.email}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, email: e.target.value })
            }
          />
          <InputControl
            className={styles.row}
            label="Enter phone"
            imp = "true"
            placeholder="Enter your phone number"
            type="number"
            value={basicInfo.phone}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, phone: e.target.value })
            }
          />
        </div>
        <div className={styles.row}>
          <InputControl
            label="Enter your Codeforces Profile"
            placeholder="Codeforces Profile username"
            type="text"
            value={basicInfo.codeforces}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, codeforces: e.target.value })
            }
          />
          <InputControl
            label="Enter your CodeChef Profile"
            placeholder="CodeChef Profile username"
            type="text"
            value={basicInfo.codechef}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, codechef: e.target.value })
            }
          />
        </div>
        <div className={styles.row}>
          <InputControl
            label="Enter your Leetcode Profile"
            placeholder="Leetcode Profile username"
            type="text"
            value={basicInfo.leetcode}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, leetcode: e.target.value })
            }
          />
          <InputControl
            label="Enter your GFG Profile"
            placeholder="GFG Profile username"
            type="text"
            value={basicInfo.gfg}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, gfg: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
