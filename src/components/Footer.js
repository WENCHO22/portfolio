import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/EmailOutlined";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/wenceslao-posse-silva-039011206/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a href="https://github.com/WENCHO22" target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
        <a href="mailto:wencho22@gmail.com" target="_blank" rel="noreferrer">
          <EmailIcon />
        </a>
      </div>
      <p> &copy; 2023</p>
    </div>
  );
}

export default Footer;
