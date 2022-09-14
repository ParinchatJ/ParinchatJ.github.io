import React, { useState } from "react";
import ButtonResumeNav from "../Home/ButtonResumeNav/ButtonResumeNav";

import "./Navbar.css";

function Navbar() {
  //change nav when scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "container-nav nav-bg" : "container-nav"}>
      <div className="nav-mid">
        <img src="./IMG_4937.PNG" alt="" />
        <h2>PoJ</h2>
      </div>
      <ButtonResumeNav />
    </div>
  );
}

export default Navbar;
