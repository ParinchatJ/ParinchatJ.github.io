import React, { useState } from "react";

import "./ButtonResumeNav.css";

function ButtonResumeNav() {
  //change color when scroll
  const [colorNav, setColorNav] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColorNav(true);
    } else {
      setColorNav(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className="button-container">
      <a
        href="https://drive.google.com/drive/folders/15nCqbuA-4EfJJzBqN1Y9YWr6d3hYu2sH?usp=sharing"
        aria-label="Resume"
        target="_blank"
        rel="noreferrer"
      >
        <button
          className={colorNav ? "btHome-nav btHome-nav-scroll" : "btHome-nav"}
        >
          RESUME
        </button>
      </a>
    </div>
  );
}

export default ButtonResumeNav;
