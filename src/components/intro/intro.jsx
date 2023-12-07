import React from "react";
import "./intro.css";
import bg from "../../assets/logo4.png";
//import { Link } from "react-scroll";
import hireImg from "../../assets/cv.jpg";
import cvFile from "../../assets/CV.pdf";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="intoText">
          I'm <span className="introName">Basith</span>
          <br />
          software Developer
        </span>
        <p className="intropara">
          Welcome to my portfolio! I'm a passionate software developer with a
          flair for crafting elegant solutions to complex problems. Here, you'll
          find a showcase of my latest work and a glimpse into my world of
          coding and creativity. Explore my projects and let's connect to
          discuss how I can bring innovation to your team.
        </p>

        <a
          href={cvFile}
          target="_blank"
          download="CV.pdf"
          rel="noopener noreferrer"
        >
          <button className="btn">
            <img src={hireImg} alt="hire me" className="hireImg" />
            My resume
          </button>
        </a>
      </div>

      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
