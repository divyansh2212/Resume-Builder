import React, { useEffect } from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import "./Sidebar.css";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const [activenav, setActivenav] = useState("home");

  useEffect(() => {
    setActivenav(location.hash.substring(1));
  }, [location.hash]);

  return (
    <div className="sideBar">
      <h1 className="resumeheader">Resume Builder</h1>
      <ul className="nav">
        <li className="navitem">
          <Link
            exact
            className={activenav === "home" ? "navsideactive" : "navlink"}
            onClick={() => {
              setActivenav("home");
            }}
            to="#home"
            smooth
          >
            <Icon style={{ width: "10vh" }} icon="material-symbols:home" />
            <span>Home</span>
          </Link>
        </li>
        <li className="navitem">
          <Link
            exact
            className={
              activenav === "colortoolbar" ? "navsideactive" : "navlink"
            }
            onClick={() => {
              setActivenav("colortoolbar");
            }}
            to="#colortoolbar"
            smooth
          >
            <Icon style={{ width: "10vh" }} icon="gg:toolbar-bottom" />
            <span>Color Toolbar</span>
          </Link>
        </li>
        <li className="navitem">
          <Link
            exact
            className={activenav === "download" ? "navsideactive" : "navlink"}
            onClick={() => {
              setActivenav("download");
              
            }}
            to="#download"
            smooth
          >
            <Icon
              style={{ width: "10vh" }}
              icon="material-symbols:download-rounded"
            />
            <span>Download Resume</span>
          </Link>
        </li>
        <li className="navitem">
          <Link
            exact
            className={
              activenav === "resumeditor" ? "navsideactive" : "navlink"
            }
            onClick={() => {
              setActivenav("resumeditor");
            }}
            to="#resumeditor"
            smooth
          >
            <Icon style={{ width: "10vh" }} icon="gala:editor" />
            <span>Resume Editor</span>
          </Link>
        </li>
        <li className="navitem">
          <Link
            exact
            className={activenav === "yourresume" ? "navsideactive" : "navlink"}
            onClick={() => {
              setActivenav("yourresume");
            }}
            to="#yourresume"
            smooth
          >
            <Icon
              style={{ width: "10vh" }}
              icon="healthicons:ui-user-profile"
            />
            <span>Your Resume</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
