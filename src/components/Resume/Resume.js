import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  AtSign,
  Calendar,
  GitHub,
  MapPin,
  Paperclip,
  Phone,
  Award,
} from "react-feather";
import { Icon } from "@iconify/react";

import styles from "./Resume.module.css";
import { useNavigate } from "react-router-dom";

const Resume = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const resumeInformation = {
    "Basic Info": {
      id: "Basic Info",
      sectionTitle: "Basic Info",
      details: JSON.parse(localStorage.getItem("basicInfo")),
    },
    "Work Experience": {
      id: "Work Experience",
      sectionTitle: "Work Experience",
      details: JSON.parse(localStorage.getItem("workExp")),
    },
    Projects: {
      id: "Projects",
      sectionTitle: "Projects",
      details: JSON.parse(localStorage.getItem("projects")),
    },
    Education: {
      id: "Education",
      sectionTitle: "Education",
      details: JSON.parse(localStorage.getItem("education")),
    },
    Achievements: {
      id: "Achievements",
      sectionTitle: "Achievements",
      details: JSON.parse(localStorage.getItem("achievements")),
    },
    Skills: {
      id: "Skills",
      sectionTitle: "Skills",
      details: JSON.parse(localStorage.getItem("skills")),
    },
  };
  const containerRef = useRef();
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    skill: "Skills",
  };

  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, seTarget] = useState("");

  const info = {
    workExp: resumeInformation["Work Experience"],
    project: resumeInformation["Projects"],
    achievement: resumeInformation["Achievements"],
    education: resumeInformation["Education"],
    basicInfo: resumeInformation["Basic Info"],
    skill: resumeInformation["Skills"],
  };

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };
  //
  const sectionDiv = {
    "Work Experience": (
      <div
        key={"workexp"}
        draggable
        onDragOver={() => seTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
        className={`${styles.section} ${
          info.workExp?.sectionTitle ? "" : styles.hidden
        }`}
      >
        {info.workExp?.details[0]?.title !== "" &&
          info.workExp?.details[0]?.companyName != "" &&
          info.workExp?.details[0]?.companyName != "" &&
          info.workExp?.details[0]?.location != "" &&
          info.workExp?.details[0]?.startDate != "" &&
          info.workExp?.details[0]?.endDate != "" &&
          info.workExp?.details[0].workDesc != "" && (
            <>
              <div className={styles.sectionTitle}>
                {info.workExp.sectionTitle}
              </div>
              <div className={styles.content}>
                {info.workExp?.details?.map((item) => (
                  <div className={styles.item} key={item.title}>
                    {item.title ? (
                      <p className={styles.title}>{item.title}</p>
                    ) : (
                      <span />
                    )}
                    {item.companyName ? (
                      <p className={styles.subTitle}>{item.companyName}</p>
                    ) : (
                      <span />
                    )}
                    {item.certificationLink ? (
                      <a className={styles.link} href={item.certificationLink}>
                        <Paperclip />
                        {item.certificationLink}
                      </a>
                    ) : (
                      <span />
                    )}
                    {item.startDate && item.endDate ? (
                      <div className={styles.date}>
                        <Calendar /> {getFormattedDate(item.startDate)}-
                        {getFormattedDate(item.endDate)}
                      </div>
                    ) : (
                      <div />
                    )}
                    {item.location ? (
                      <p className={styles.date}>
                        <MapPin />
                        {item.location}
                      </p>
                    ) : (
                      <span />
                    )}
                    {item.workDesc ? (
                      <ul className={styles.points}>
                        {item.workDesc?.split("\n").map((elem, index) => (
                          <li className={styles.point} key={elem + index}>
                            {elem}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span />
                    )}
                    {/* {item.workDesc}  */}
                  </div>
                ))}
              </div>
            </>
          )}
      </div>
    ),
    Projects: (
      <div
        key={"project"}
        draggable
        onDragOver={() => seTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
        className={`${styles.section} ${
          info.project?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
        <div className={styles.content}>
          {info.project?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.deployedLink ? (
                <a className={styles.link} href={item.deployedLink}>
                  <Paperclip />
                  {item.deployedLink}
                </a>
              ) : (
                <span />
              )}
              {item.githubLink ? (
                <a className={styles.link} href={item.githubLink}>
                  <GitHub />
                  {item.githubLink}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className={styles.overview}>{item.overview} </p>
              ) : (
                <span />
              )}
              {/* {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )} */}
              {item.desc ? (
                <ul className={styles.points}>
                  {item.desc?.split("\n").map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    Education: (
      <div
        key={"education"}
        draggable
        onDragOver={() => seTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
        className={`${styles.section} ${
          info.education?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.education?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.education?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className={styles.subTitle}>{item.college}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
              {item.cgpa ? (
                <div className={styles.cgpa}>
                  <Award /> CGPA - {item.cgpa}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    Achievements: (
      <div
        key={"achievement"}
        draggable
        onDragOver={() => seTarget(info.achievement?.id)}
        onDragEnd={() => setSource(info.achievement?.id)}
        className={`${styles.section} ${
          info.achievement?.sectionTitle ? "" : styles.hidden
        }`}
      >
        {info.achievement?.details?.length > 0 && (
          <>
            {" "}
            <div className={styles.sectionTitle}>
              {info.achievement?.sectionTitle}
            </div>
            <div className={styles.content}>
              {info.achievement?.details?.length > 0 ? (
                <ul className={styles.numbered}>
                  {info.achievement?.details?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          </>
        )}
      </div>
    ),
    Skills: (
      <div
        key={"Skills"}
        draggable
        onDragOver={() => seTarget(info.skill?.id)}
        onDragEnd={() => setSource(info.skill?.id)}
        className={`${styles.section} ${
          info.skill?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.skill?.sectionTitle}</div>
        <div className={styles.content}>
          {info.skill?.details?.length > 0 ? (
            <div className={styles.showskills}>
              {info.skill?.details?.map((elem, index) => (
                <div
                  style={{ border: `2px solid ${props.activeColor}` }}
                  className={styles.skillpoints}
                  key={elem + index}
                >
                  {elem}
                </div>
              ))}
            </div>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
  };

  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempColumns = [[...columns[0]], [...columns[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
    }

    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumns(tempColumns);
  };

  useEffect(() => {
    setColumns([
      [sections.project, sections.education, sections.skill],
      [sections.workExp, sections.achievement],
    ]);
  }, []);

  useEffect(() => {
    swapSourceTarget(source, target);
  }, [source]);

  useEffect(() => {
    const container = containerRef.current;
    if (!props.activeColor || !container) return;

    container.style.setProperty("--color", props.activeColor);
  }, [props.activeColor]);

  return (
    <div ref={ref} id="yourresume" onMouseEnter={() => navigate("#yourresume")}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.header}>
          <p className={styles.heading}>{info.basicInfo?.details?.name}</p>
          <p className={styles.subHeading}>{info.basicInfo?.details?.title}</p>

          <div className={styles.links}>
            {info.basicInfo?.details?.email ? (
              <a className={styles.link} type="email">
                <AtSign /> {info.basicInfo?.details?.email}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.details?.phone ? (
              <a className={styles.link}>
                <Phone /> {info.basicInfo?.details?.phone}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.details?.linkedin ? (
              <a
                className={styles.link}
                href={`https://www.linkedin.com/in/${info.basicInfo?.details?.linkedin}/`}
                target="_blank"
              >
                <Icon icon="mdi:linkedin" />
                {info.basicInfo?.details?.linkedin}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.details?.github ? (
              <a
                className={styles.link}
                href={`https://github.com/${info.basicInfo?.details?.github}`}
                target="_blank"
              >
                <Icon icon="mdi:github" />
                {info.basicInfo?.details?.github}
              </a>
            ) : (
              <span />
            )}
          </div>
          {/* <b>Coding Profiles :</b> */}
          <div className={styles.links}>
            {info.basicInfo?.details?.leetcode ? (
              <a
                className={styles.link}
                type="text"
                href={`https://leetcode.com/${info.basicInfo?.details?.leetcode}/`}
                target="_blank"
              >
                <Icon icon="simple-icons:leetcode" />
                {info.basicInfo?.details?.leetcode}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.details?.codeforces ? (
              <a
                className={styles.link}
                href={`https://codeforces.com/profile/${info.basicInfo?.details?.codeforces}`}
                target="_blank"
              >
                <Icon icon="simple-icons:codeforces" />{" "}
                {info.basicInfo?.details?.codeforces}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.details?.codechef ? (
              <a
                className={styles.link}
                href={`https://www.codechef.com/users/${info.basicInfo?.details?.codechef}`}
                target="_blank"
              >
                <Icon icon="simple-icons:codechef" />{" "}
                {info.basicInfo?.details?.codechef}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.details?.gfg ? (
              <a
                className={styles.link}
                href={`https://auth.geeksforgeeks.org/user/${info.basicInfo?.details?.gfg}/`}
                target="_blank"
              >
                <Icon icon="simple-icons:geeksforgeeks" />{" "}
                {info.basicInfo?.details?.gfg}
              </a>
            ) : (
              <span />
            )}
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.col1}>
            {columns[0].map((item) => sectionDiv[item])}
          </div>
          <div className={styles.col2}>
            {columns[1].map((item) => sectionDiv[item])}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Resume;
