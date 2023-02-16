import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="billboard">
        <h2> Hi, my name is Wencho</h2>
        <div className="prompt">
          <p>A web developer with a passion for learning and creating.</p>
          <a
            href="https://www.linkedin.com/in/wenceslao-posse-silva-039011206/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="svg-icons" />
          </a>
          <a
            href="https://github.com/WENCHO22"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon className="svg-icons" />
          </a>
          <a href="mailto:wencho22@gmail.com">
            <EmailIcon className="svg-icons" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
