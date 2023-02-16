import React from "react";
import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h1> Skills</h1>
      <ol className="list">
        <li className="item">
          <h2> Front-End</h2>
          <span>HTML, CSS, ReactJS, NPM, Yarn, SASS</span>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <span>NodeJS, MySQL</span>
        </li>
        <li className="item">
          <h2>Languages</h2>
          <span>JavaScript, TypeScript</span>
        </li>
      </ol>
    </div>
  );
}

export default Skills;
