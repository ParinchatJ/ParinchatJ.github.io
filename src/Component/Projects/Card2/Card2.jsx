import React from "react";

import "../Card1/Card1.css";

function Card2() {
  const sizeOfPicPro = {
    height: "200px",
    width: "100%",
  };

  return (
    <div className="container-card">
      <div className="upper-card">
        <img
          src="./Screenshot 2566-05-23 at 19.08.32.png"
          style={sizeOfPicPro}
          alt=""
        />
        <div className="content-card">
          <h1>Sai-song program 🎤</h1>
          <p className="desc-project">
            A simple Javascript web application that 
            using HTML CSS Javascript to calculate your
            money: How much money you will pay (with DOM)
          </p>
          <p className="skill-card">HTML CSS Javascript DOM</p>
        </div>
      </div>
      <div className="lower-card">
        <a href="https://github.com/ParinchatJ/sai-song-program">
          <button className="gh">GitHub </button>
        </a>
        <a href="sai-song-program.vercel.app">
          <button className="dm">Demo</button>
        </a>
      </div>
    </div>
  );
}

export default Card2;
