import React from "react";

import "./ButtonResume.css";

function ButtonResume() {
  return (
    <div className="button-container">
      <a
        href="https://drive.google.com/drive/folders/15nCqbuA-4EfJJzBqN1Y9YWr6d3hYu2sH?usp=sharing"
        aria-label="Resume"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btHome">RESUME</button>
      </a>
    </div>
  );
}

export default ButtonResume;
