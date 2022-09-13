import React from "react";
import { TypeAnimation } from "react-type-animation";
import './NameInHome.css'

function NameInHome() {
  return (
    <div className="name-in-home">
      <TypeAnimation
        className="typeAnimation"
        sequence={[
          "ParinchatJ😼",
          1000,
          "Pojo🧸",
          1000,
          "Software Developer🌱",
          1000,
          "Cat Lover🐈",
          1000,
        ]}
        speed={50} 
        style={{ fontSize: "3em", fontFamily: 'PT Mono', fontWeight: 'bold' }}
        wrapper="span" 
        repeat={Infinity}
      />
    </div>
  );
}

export default NameInHome;
