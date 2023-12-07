import React from "react";
import "./Works.css";
import wrkImgs from "../../assets/doctor.png";
// import '../skills/skills.css';

const Works = () => {
  return (
    <section id="works">
      <h2 className="tittle">Projects</h2>
      <span className="descr">
        Experience the impact of innovation through two of my top projects
      </span>

      <div className="skillBars2">
        <div className="skillBar2">
          <img src={wrkImgs} alt="" className="skills3" />
          <div className="skillText2">
            <h3>Doctor appointment booking system</h3>
            <p>
              I designed and developed a Doctor Appointment Booking System,
              streamlining the process of scheduling medical appointments. This
              user-friendly web application allows patients to book appointments
              online, simplifying healthcare access and improving efficiency.
            </p>
            <a href="">
              <button className="projectBtn">view project</button>
            </a>
          </div>
        </div>

        <div className="skillBar2">
          <img src={wrkImgs} alt="" className="skills3" />
          <div className="skillText2">
            <h3>Mobile app development</h3>
            <p>
              I specialize in creating high-performance, cross-platform mobile
              applications using React Native. Leveraging the power of
              JavaScript and React, I craft stunning and efficient apps that
              work seamlessly on both iOS and Android devices. From concept to
              deployment, I'm committed to delivering user-friendly,
              feature-rich mobile solutions that meet your business objectives.
            </p>
            <a href="">
              <button className="projectBtn">view project</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
