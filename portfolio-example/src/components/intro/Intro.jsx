import React, { useEffect } from "react";
import Typical from "react-typical";
import "./intro.scss";

export default function Intro({ darkTheme, active, setActivePage }) {
  useEffect(() => {}, [darkTheme, active]);

  const updatePage = () => {
    const newActivePage = [false, false, false, false];
    newActivePage[1] = true;
    setActivePage(newActivePage);
  };

  return (
    <div className="intro" id="intro">
      <video src="../../assets/videos/video-1.mp4" autoPlay loop muted />

      <div className="info">
        <h1 className="orange">Oliver Holroyd</h1>
      </div>

      <div className="arrow-border">
        <a className="arrow-container" href="#experience" onClick={updatePage}>
          <span className="arrow">
            <i class="fas fa-arrow-right orange"></i>
          </span>
        </a>
      </div>
    </div>
  );
}
