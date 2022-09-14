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
          src="./Screen Shot 2565-08-17 at 04.16.37.png"
          style={sizeOfPicPro}
          alt=""
        />
        <div className="content-card">
          <h1>JAMMMING 🎤</h1>
          <p>
            A React web application that using API Spotify allows users to
            search songs from the Spotify library and create the playlist that
            you wish.
          </p>
          <p className="skill-card">React Spotify API Vercel</p>
        </div>
      </div>
      <div className="lower-card">
        <a href="https://github.com/ParinchatJ/Jammming-Codecademy-React">
          <button className="gh">GitHub </button>
        </a>
        <a href="https://jammming-codecademy-react.vercel.app/">
          <button className="dm">Demo</button>
        </a>
      </div>
    </div>
  );
}

export default Card2;
