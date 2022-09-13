import React from "react";
import "./Card1.css";

function Card1() {
  const sizeOfPicPro = {
    height: "auto",
    width: "100%",
  };

  return (
    <div className="container-card">
      <div className="upper-card">
        <img
          src="./Screen Shot 2565-09-02 at 00.45.08.png"
          style={sizeOfPicPro}
          alt=""
        />
        <div className="content-card">
          <h1>Extracts website ⌚</h1>
          <p>
            This website creating by MERN stack, it can record their workouts in
            a diary format. Having a Setgoal function to track weekly workouts
            through graphs.
          </p>
          <p className="skill-card">MERN Pagination ApexChart Authentication</p>
        </div>
      </div>
      <div className="lower-card">
        <a href="https://github.com/ParinchatJ/Extract_frontend">
          <button className="gh">GitHub</button>
        </a>
        <a href="https://extracts.vercel.app/">
          <button className="dm">Demo</button>
        </a>
      </div>
    </div>
  );
}

export default Card1;
