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
        <img src="./Screenshot 2566-05-23 at 19.21.55.png" style={sizeOfPicPro} alt="" />
        <div className="content-card">
          <h1>Simple diary project 🐶</h1>
          <p className="desc-project">
            The Diary web application that is simple app to Create, 
            Read, Update and Delete (CRUD) your data uses the following 
            tools Express MongoDB DayJS HandlebarJS
          </p>
          <p className="skill-card">Express MongoDB HandlebarJS</p>
        </div>
      </div>
      <div className="lower-card">
        <a href="https://github.com/ParinchatJ/simple-diary-project">
          <button className="gh">GitHub</button>
        </a>
        <a href="https://simple-diary-project.vercel.app">
          <button className="dm">Demo</button>
        </a>
      </div>
    </div>
  );
}

export default Card3;
