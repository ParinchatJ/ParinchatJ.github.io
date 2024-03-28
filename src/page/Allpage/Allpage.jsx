import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import NameInHome from "../../Component/Home/NameInHome/NameInHome";
import ButtonResume from "../../Component/Home/ButtonResume/ButtonResume";
import Scroll from "../../Component/Home/Scroll/Scroll";
import NavbarContact from "../../Component/Contact1/NavbarContact/NavbarContact";
import Bottom from "../../Component/Contact1/Bottom/Bottom";
import Card1 from "../../Component/Projects/Card1/Card1";
import Card2 from "../../Component/Projects/Card2/Card2";
import Card3 from "../../Component/Projects/Card3/Card3";

import "./Allpage.css";

function Allpage() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div className="big-container">
      <img className="bg" src="./IMG_4935.PNG" alt="" />
      <ScrollContainer>
        <div className="home-container">
          <div className="home-head">
            <div className="home">
              <h1 className="home-content">Hi, I'am</h1>
              <NameInHome />
            </div>
            <ButtonResume />
          </div>
          <div className="scroll">
            <Scroll />
          </div>
        </div>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <div className="about-container">
              <img src="./IMG_4936.PNG" alt="" />
              <h1>About Me</h1>
              <p className="textAbout">
                &nbsp; &nbsp; &nbsp; &nbsp;Hello! My name is Parinchat
                Juntaworn. I recently graduated from Thammasat University with a passion for detail-oriented work and a persistent nature.
                Conducted machine learning for my final project during studies. Further developed skills in Generation's Junior Software Developer Bootcamp. Skilled in basic manual testing, creating test cases, logging issues, and scenarios. {" "}
                <b>
                  Seeking to contribute and grow in the field of software testing (manual and automation)
                </b>
              </p>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <div className="edu-container">
              <h1>Education</h1>
              <div className="edu-content">
                <div className="gen-content card-edu">
                  <img src="./IMG_4927.PNG" alt="" />
                  <h2>Generation Thailand 2022</h2>
                  <p>Learner Junior Software Developer</p>
                </div>
                <div className="tu-content card-edu">
                  <img src="./IMG_4928.PNG" alt="" />
                  <h2>Thammasat University 2017-2021</h2>
                  <p>
                    Bachelor of Arts (BA) - Geography and Geoinformatics Major
                    (Second-Class Honors)
                  </p>
                </div>
              </div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Sticky(26, 30), Fade(), MoveOut(-300, 0))}>
            <div className="skill">
              <h1>Testing</h1>
            </div>
          </Animator>


          <Animator animation={batch(Sticky(15, 40), Fade(), MoveOut(300, 0))}>
            {/* <div>
              <h3>Basic Manual Testing</h3>  <br />
                <div>
                  - Create Test case <br />
                  - Log Issue<br />
                  - Scenario<br />
                  - Test report <br />
                  - Flowchart<br />
                  - Basic Python
                </div>
            </div> */}

          </Animator>
          

          <Animator animation={batch(Sticky(70, 30), Fade(), MoveOut(-300, 0))}>
            <div className="skill">
              <h1>Software Developer</h1>
            </div>
          </Animator>
          
          <Animator animation={batch(Sticky(60, 40), Fade(), MoveOut(300, 0))}>
            <img className="skill-img" src="./icons8-html-5-96.png" alt="" />
          </Animator>
          <Animator animation={batch(Sticky(70, 40), Fade(), MoveOut(300, 0))}>
            <img className="skill-img" src="./icons8-css3-96.png" alt="" />
          </Animator>
          <Animator animation={batch(Sticky(80, 40), Fade(), MoveOut(300, 0))}>
            <img
              className="skill-img"
              src="./icons8-javascript-144.png"
              alt=""
            />
          </Animator>
          <Animator animation={batch(Sticky(60, 55), Fade(), MoveOut(300, 0))}>
            <img
              className="skill-img"
              src="./icons8-react-native-144.png"
              alt=""
            />
          </Animator>
          <Animator animation={batch(Sticky(70, 55), Fade(), MoveOut(300, 0))}>
            <img className="skill-img" src="./icons8-node-js-144.png" alt="" />
          </Animator>
          <Animator animation={batch(Sticky(80, 55), Fade(), MoveOut(300, 0))}>
            <img className="skill-img" src="./Expressjs.png" alt="" />
          </Animator>

          <Animator animation={batch(Sticky(26, 72), Fade(), MoveOut(-300, 0))}>
            <div className="skill">
              <h1>Database</h1>
            </div>
          </Animator>
          <Animator animation={batch(Sticky(20, 85), Fade(), MoveOut(300, 0))}>
            <img className="skill-img" src="./icons8-mysql-logo-144.png" alt="" />
          </Animator>
          <Animator animation={batch(Sticky(30, 85), Fade(), MoveOut(300, 0))}>
            <img className="skill-img" src="./icons8-mongodb-144.png" alt="" />
          </Animator>

          <Animator animation={batch(Sticky(70, 72), Fade(), MoveOut(-300, 0))}>
            <div className="skill">
              <h1>Others</h1>
            </div>
          </Animator>
          <Animator animation={batch(Sticky(60, 85), Fade(), MoveOut(300, 0))}>
            <img className="skill-img" src="./icons8-git-144.png" alt="" />
          </Animator>
          <Animator animation={batch(Sticky(70, 85), Fade(), MoveOut(300, 0))}>
            <img className="skill-img" src="./Octocat.png" alt="" />
          </Animator>
          <Animator animation={batch(Sticky(80, 85), Fade(), MoveOut(300, 0))}>
            <img
              className="skill-img"
              src="./icons8-postman-is-the-only-complete-api-development-environment-96.png"
              alt=""
            />
          </Animator>

          <Animator animation={batch(Sticky(50, 20), Fade(), MoveOut(300, 0))}>
            <div className="container-skills">
              <h1>My Skills</h1>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={FadeUp}>
            <div className="container-project">
              <h1>Projects</h1>
              <div className="card-projects">
                <Card1 />
                <Card2 />
                <Card3 />
              </div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <div className="container-contact">
              <img src="./IMG_4926.PNG" alt="" />
              <h1>Get In Touch</h1>
              <p>
                &nbsp; &nbsp; &nbsp; &nbsp;I’m currently looking for new
                opportunities. If you are interested in me, have some questions,
                or just want to say hi. Don't hesitate to talk with me. I will
                reply as soon as possible.
              </p>
              <ButtonResume />
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      <NavbarContact />
      <Bottom />
    </div>
  );
}

export default Allpage;
