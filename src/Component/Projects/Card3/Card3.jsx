import React from "react";

import "../Card1/Card1.css";

function Card3() {
  const sizeOfPicPro = {
    height: "200px",
    width: "100%",
  };

  return (
    <div className="container-card">
      <div className="upper-card">
        <img src="./headcss.png" style={sizeOfPicPro} alt="" />
        <div className="content-card">
          <h1>Head-animation-CSS 🐶</h1>
          <p> Make the topic more interesting by using only CSS.</p>
          <p className="skill-card">only CSS</p>
        </div>
      </div>
      <div className="lower-card">
        <a href="https://github.com/ParinchatJ/Head-animation-CSS">
          <button className="gh">GitHub</button>
        </a>
        <a href="https://head-animation-css.vercel.app/">
          <button className="dm">Demo</button>
        </a>
      </div>
    </div>
  );
}

export default Card3;
