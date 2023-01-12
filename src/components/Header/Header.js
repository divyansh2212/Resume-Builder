import React from "react";
import styles from "../Header/Header.module.css";
import ResumeSvg from "../../assets/resume.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.container}
      id="home"
      onMouseEnter={() => navigate("#home")}
    >
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free.</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={ResumeSvg} alt="Resume" />
      </div>
    </div>
  );
};

export default Header;
