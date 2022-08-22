import React from "react";
import { useState, useEffect } from "react";
import "./about.css";
import { Abtskills } from "../data";
import img1 from "../../asset/pexels-alleksana-4284288.jpg";
import { slideText } from "../data";
import Cv from "../../asset/webresume.pdf";
import { useGlobalContext } from "../../context";
import Trust from "../trust comp/trust";
import Submenu2 from "../submenu comp/submenufixed/submenu2";

const About = () => {
  const { AxisSuccess, AxisFailed } = useGlobalContext();
  const [textid, setTextid] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [display, setDisplay] = useState(false);
  const [text, setText] = useState({ id: "", text: "" });
  const Works = Abtskills.slice(0, 3);
  const Works1 = Abtskills.slice(3, 5);

  const Fade = document.querySelectorAll(".fade-up");
  const scrollFadeOpts = {
    rootmargin: 0,

    threshold: 0.3,
  };
  const ScrollFade = new IntersectionObserver((entries) => {
    entries.forEach((entr) => {
      if (!entr.isIntersecting) {
        return;
      } else {
        entr.target.classList.add("slide-up");
        ScrollFade.unobserve(entr.target);
      }
    });
  }, scrollFadeOpts);

  Fade.forEach((item) => {
    ScrollFade.observe(item);
  });
  const lastId = slideText.length - 1;
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        AxisSuccess();
      } else {
        AxisFailed();
      }
    });
  }, [AxisFailed, AxisSuccess]);

  useEffect(() => {
    if (textid > lastId) {
      setTextid(0);
    }
    const animate = setInterval(() => {
      setTextid(textid + 1);
    }, 3000);
    return () => clearInterval(animate);
  }, [textid]);

  const Toggle = (...comp) => {
    setDisplay(true);
    setText({
      id: comp[0],
      text: comp[1],
    });
  };

  return (
    <main className="abt_main">
      <Submenu2 />
      <section className="abt-sec">
        <img src={img1} alt="" className="abtimg" />
        <div className="abtCont">
          <h1
            className="abttextEl"
            style={{ transform: `translateX(${100 + offsetY * 2.9}px)` }}
          >
            WORKFLOW
          </h1>
        </div>
        <p
          className="small"
          style={{ transform: `translateY(${100 + offsetY * 0.5}px)` }}
        >
          We enforce
        </p>
        <div
          className="actionbtn"
          style={{ transform: `translateY(${100 + offsetY * 0.8}px)` }}
        >
          {slideText.map((texts, id) => {
            let position = "";
            const { text } = texts;
            if (id === textid) {
              position = "activeslide";
            }

            return <h1 className={`actionext ${position}`}>{text}</h1>;
          })}
        </div>
        <div
          className="hmbtnCont"
          // style={{ transform: `translateY(${100 + offsetY * 0.4}px)` }}
        >
          <button className="hmbtns-1">
            <a href={Cv} download>
              Download CV
            </a>
          </button>
        </div>
      </section>
      <section className="sec-2">
        <div className="sec_head">
          <h1 className="title  fade-up">
            <span>Get to know</span> ABOUT ME ?
          </h1>
        </div>
        <div className="text_1 fade-up">
          <h2 className="el-1">
            SOFTWARE ENGINEER/ REACT DEVELOPER / UI/UX DESIGNER
          </h2>
          <p>
            Over the years, I have worked as a react developer building front
            end interface and algorithms. Through years of committed study and
            practice, I have been able to commit myself into software and web
            development, as well as ui designs.
          </p>
          <h2 className="el-2">Languages and Stack</h2>
          <p className="p-tag">
            Javascript
            <ul>
              <li>Html 5</li>
              <li>Css/Scss</li>
              <li>React Js</li>
              <li>Mongo DB</li>
              <li>Node.Js</li>
            </ul>
            <h2 className="ui">Design Tools</h2>
            <ul style={{ position: "relative", top: "15px" }}>
              <li>Adobe XD</li>
              <li>Invision</li>
              <li>Illustrator</li>
            </ul>
          </p>
          <h2 style={{ position: "relative", top: "35px" }}>Experience</h2>
          <p style={{ position: "relative", top: "35px" }}>2+ years</p>
        </div>
        <div
          className="text_1 fade-up"
          style={{ position: "relative", left: "-25px" }}
        >
          <h2>WORKFLOW</h2>
          <p>
            I focus more on delivering a standard package to my clients to suite
            their desires. My workflow covers:
            <br />
            <ul style={{ position: "relative", top: "35px" }}>
              <li>
                Enforced website standards for visual and design integrity
              </li>
              <li>
                Leverage mastery of HTML, CSS/SCSS, JAVASCRIPT to build top
                quality code for diverse projects{" "}
              </li>
              <li>Create clean, well documented custom code and updates</li>
              <li>
                Work closely with other developers ro troubleshoot and resolve
                code issues
              </li>
              <li>
                Collaborate with web content editors to facilitate website
                maintainace
              </li>
              <li>Verify front-end code functionality in cross platforms</li>
              <li>Implement website firewalls and message encryption.</li>
              <li>
                Backed up files from websites to local directories or via
                repositories for instant recovery
              </li>
            </ul>
          </p>
        </div>
      </section>
      <section className="sec_3">
        <h1 className="sec3 fade-up">PROJECTS</h1>
        <div className="vision fade-up">
          {Works.map((item, id) => {
            let position = "";
            // let TextAdjust = "";
            if (id === 0 + 2) {
              position = "setabt";
            }
            // if (id > 0) {
            //   TextAdjust = "text-2";
            // }
            // if (id === 0 + 1) {
            //   image = "sabtskill";
            // }
            return (
              <>
                <div key={id} className={`worksCont ${position}`}>
                  <img src={item.img} alt="" className="works" />
                </div>
              </>
            );
          })}
          <div className="vision1">
            {Works1.map((item, id) => {
              let positions = "";
              if (id === 0 + 1) {
                positions = "setabt";
              }
              if (id === 0) {
                // image = "setimg1";
              }

              return (
                <>
                  <h1 className="visiontext2">UX/UI Design</h1>
                  <div key={id} className={`workCont ${positions}`}>
                    <img src={item.img} alt="" className="work" />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <div
        className="abtfoot"
        style={{
          position: "relative",
          top: "100vh",
          backgroundColor: "rgb(19, 19, 41)",
          minHeight: "calc(100vh - 190px)",
          zIndex: "0",
        }}
      >
        <Trust />
      </div>
    </main>
  );
};

export default About;
