import React from "react";
import "./Works.css";
import wrkImgs from "../../assets/doctor.png";
import mernImg from "../../assets/mern.png";
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
              this system reduce lots of human effort and time. no need any phone calls or physical visits
            </p>
            <a href="https://github.com/basith4me/doctor-appointment-booking.git">
              <button className="projectBtn">view project</button>
            </a>
          </div>
        </div>

        <div className="skillBar2">
          <img src={mernImg} alt="" className="skills3" />
          <div className="skillText2">
            <h3>MERN stack book-store</h3>
            <p>
              I have successfully developed a simple MERN (MongoDB, Express.js,
              React, Node.js) stack Book Store CRUD (Create, Read, Update,
              Delete) application. This project showcases my proficiency in
              full-stack development, including database management, server-side
              scripting, and dynamic front-end interactions. It's a practical
              demonstration of my skills in building scalable and interactive
              web applications.
            </p>
            <a href="https://github.com/basith4me/book-store-mern.git">
              <button className="projectBtn">view project</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
