import React from "react";
import "./skills.css";
import skillImg from "../../assets/1-cover.jpg";
import web from '../../assets/web2.png'
import desktop from '../../assets/desktop.png';

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">Sevices & expertise</span>
      <span className="skillsDesc">
      I specialize in web development, mobile app development, and software development. With a keen eye for detail and a passion for crafting efficient and user-friendly solutions, I bring your digital ideas to life. Whether it's creating stunning websites, developing robust mobile applications, or designing custom software, I'm dedicated to delivering excellence in every project.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={skillImg} alt="" className="skills" />
          <div className="skillText">
            <h2>Mobile app development</h2>
            <p>I specialize in creating high-performance, cross-platform mobile applications using React Native. Leveraging the power of JavaScript and React, I craft stunning and efficient apps that work seamlessly on both iOS and Android devices. From concept to deployment, I'm committed to delivering user-friendly, feature-rich mobile solutions that meet your business objectives.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={web} alt="" className="skills2" />
          <div className="skillText">
            <h2>web development</h2>
            <p>I bring your web projects to life with a comprehensive skill set. From dynamic web applications with the MERN stack to interactive websites powered by React, I create engaging and responsive user experiences. Additionally, I have a strong foundation in PHP, offering versatile web solutions to meet your specific needs.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={desktop} alt="" className="skills2" />
          <div className="skillText">
            <h2>Desktop application development</h2>
            <p> specialize in designing and building powerful desktop applications using a variety of languages and frameworks. Whether it's developing feature-rich software in C#, Java, or Python, I'm committed to delivering solutions that are user-friendly, efficient, and compatible across multiple platforms, including Windows, macOS, and Linux.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
