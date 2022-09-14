import React from "react";

import "./NavbarContact.css";

export default function NavbarContact() {
  return (
    <div>
      <ul className="navleft">
        <li>
          <a
            href="https://github.com/ParinchatJ"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="github-icon"
              src="./icons8-github-128.png"
              alt="GitHub"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jparinchat/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icon-linkedin"
              src="./icons8-linkedin-100.png"
              alt="LinkedIn"
            />
          </a>
        </li>
        <li>
          <a
            href="mailto:j.parinchat@gmail.com"
            aria-label="Email"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon" src="./icons8-gmail-100.png" alt="Mail" />
          </a>
        </li>
      </ul>
    </div>
  );
}
