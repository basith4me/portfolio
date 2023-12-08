import React, { useRef } from "react";
import "./contact.css";
import github from "../../assets/github.png";
import clientimgs from "../../assets/dialog.png";
import facebook from "../../assets/fb.jpg";
import linkdin from "../../assets/linkdin.jpg";
import emailjs from "@emailjs/browser";
import nawaloka from "../../assets/nawaloka.jpg";
import "./style.css";

const Contact = () => {
  //export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_566nmro",
        "template_heq64xh",
        form.current,
        "rEJRLbx0C9x7hOpr_"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("mail has sent succesfully!");
        },
        (error) => {
          console.log(error.text);
          e.target.reset();
          alert("invalid");
        }
      );
  };
  //const form = useRef();
  return (
    <section id="contactPage">
      <div className="clients">
        <h1 className="title">My clients</h1>
        <p className="desc">
          i have developed some systems to following leading companies in SriLanka.
        </p>
        <div className="clientImg">
          <img src={clientimgs} alt="clnt" className="imgss" />
          <img src={nawaloka} alt="clnt" className="imgss" />
        </div>
      </div>
      <div id="contact">
        <h1 id="title2">Contact Me</h1>
        <span className="contactDesc">
          please fill out below form to discuss any work opportunities.
        </span>
        <form action="" className="contactMe" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="your name"
            name="from_name"
            required
          />
          <input
            type="email"
            className="mail"
            placeholder="your email"
            name="from_email"
            required
          />
          <textarea
            name="message"
            cols=""
            rows="5"
            className="message"
            placeholder="your request"
            required
          ></textarea>
          <button className="send" type="submit" value="send">
            submit
          </button>
          <div className="links">
            <a
              href="https://github.com/basith4me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="" className="linkImg" />{" "}
            </a>

            <a
              href="https://web.facebook.com/?_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="" className="linkImg" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkdin} alt="" className="linkImg" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
