import React, { useState } from "react";
import ButtonResumeNav from "../Home/ButtonResumeNav/ButtonResumeNav";
import "./Navbar.css";

function Navbar() {
  const [navClick, setNavClick] = useState(false);

  const navOnClick = () => {
    setNavClick((navClick) => !navClick);
  };

  let toggleCheck = navClick ? "nav-left" : null;

  //change nav
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
        {/* <div className={toggleCheck} onClick={navOnClick}>
          <img src="./menu.png" alt="" />
          <h2>MENU</h2>
        </div> */}
        <div className="nav-mid">
          <img src="./IMG_4937.PNG" alt="" />
          <h2>PoJ</h2>
        </div>
        <ButtonResumeNav />

        {/* <div className="nav-left">
        <img src='./menu.png' alt='' onClick={clickNav}/>
        <h2>MENU</h2>
      </div>
      <div className="nav-mid">
        <img src='./IMG_4936.PNG' alt='' />
        <h2>PoJ</h2>
      </div>
      <ButtonResumeNav /> */}
      </div>
      // <div className="click-nav-active">
      //   <div className="img-close">
      //     <img src="./icons8-close-120.png" alt="" />
      //   </div>
      //   <ul>
      //     <li>
      //       <a href="#home-container">Home</a>
      //     </li>
      //     <li>
      //       <a href="#1">About Me</a>
      //     </li>
      //     <li>
      //       <a href="#edu-container">Education</a>
      //     </li>
      //     <li>
      //       <a href="#container-skills">Skills</a>
      //     </li>
      //     <li>
      //       <a href="#container-project">Projects</a>
      //     </li>
      //     <li>
      //       <a href="#container-contact">Contact</a>
      //     </li>
      //   </ul>
      // </div>
  );
}

export default Navbar;
