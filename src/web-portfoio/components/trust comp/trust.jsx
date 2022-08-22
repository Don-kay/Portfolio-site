import React from "react";
import "./trust.css";
import { FaFacebookF, FaWhatsapp, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef } from "react";
import trust from "../trust comp/trust.jsx";
import emailjs from "emailjs-com";

const Trust = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    e.target.reset();
    emailjs.sendForm(
      "service_a3d7ygm",
      "template_zbn0tbu",
      form.current,
      "vV-UXZ7oXDd9g22FV"
    );
  };
  return (
    <main className="trustmain">
      <section className="trustCont">
        <h2>Get in touch</h2>
        <div className="contacts">
          <Link to={"https://m.me/david.kerry.370"} target={"_blank"}>
            <div className="ctc">
              <FaFacebookF className="icon facebook" />
            </div>
          </Link>
          <Link to={"https://api.whatsapp.com/send?phone=+2340854729364"}>
            <div className="ctc">
              <FaWhatsapp className="icon whatsapp" />
            </div>
          </Link>

          <Link to={trust}>
            <div className="ctc">
              <FaPhone className="icon phone" />
            </div>
          </Link>
        </div>
        <div className="permalinks">
          <ul>
            <Link to={"/"}>
              <li>
                <h3>Home</h3>
              </li>
            </Link>
            <Link to={"/about"}>
              <li>
                <h3>About</h3>
              </li>
            </Link>
            <Link to={"/about"}>
              <li>
                <h3>Projects</h3>
              </li>
            </Link>
          </ul>
          <div>
            <p className="email">email: daviskrisa1@yahoo.com</p>
            <p className="email">phone: 08054729364</p>
          </div>
          <p>Copyright © 2022 DaveTech </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="portform">
          <input
            type="name "
            name="name"
            placeholder="your full name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="abc@email.com"
            required
          />
          <textarea
            className="portcnct"
            name="message"
            rows="10"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="formbtn">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
};

export default Trust;
