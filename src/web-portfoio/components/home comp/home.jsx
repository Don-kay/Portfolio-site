import React from "react";
import { useEffect, useState, useRef } from "react";
import "./home.css";
import { useGlobalContext } from "../../context";
import { skills } from "../data";
import { SkillText } from "../data";
import author from "../../asset/IMG_20220809_023637.png";
import Bg from "../../asset/images3.jpeg";
import Cv from "../../asset/webresume.pdf";
import detailImg from "../../asset/pexels-vinicius-altava-2657594.png";
import detailImg_1 from "../../asset/illus 2.png";

const Home = () => {
  const { AxisSuccess, AxisFailed } = useGlobalContext();
  const [num, setNum] = useState(0);
  const [texts, setText] = useState("");
  const Aut = useRef(null);
  const Texts = useRef(null);
  const Text = document.querySelector(".hmtextCont");
  const Hero = document.querySelector(".hmh-skills");
  const faded = document.querySelectorAll(".faded");
  const Slide_Up = document.querySelectorAll(".imghover");
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
    const textopts = {
      threshold: 0.8,
    };
    const textEl = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          Texts.current.classList.add("slide-in");
          textEl.unobserve(document.querySelector(".home"));
        }
      });
    }, textopts);
    textEl.observe(document.querySelector(".home"));
  }, [Text]);

  useEffect(() => {
    const authOptions = {
      threshold: "0.88",
    };
    const AuthObserve = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Aut.current.classList.add("slide-r");
        } else {
          AuthObserve.unobserve(Aut.classList);
          return;

          // Hero.classList.remove("slide-r");
        }
      });
    }, authOptions);
    AuthObserve.observe(document.querySelector(".home"));
  }, [Hero]);

  const scrollFadeOpts = {
    rootmargin: 0,

    threshold: 0.3,
  };
  const ScrollFade = new IntersectionObserver((entries) => {
    entries.forEach((entr) => {
      if (!entr.isIntersecting) {
        return;
      } else {
        entr.target.classList.add("fade-up");
        ScrollFade.unobserve(entr.target);
      }
    });
  }, scrollFadeOpts);

  faded.forEach((item) => {
    ScrollFade.observe(item);
  });

  const SlideOpts = {
    threshold: 0.6,
  };

  const SlideUpObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("img-slide");
      }
    });
  }, SlideOpts);
  Slide_Up.forEach((item) => {
    SlideUpObserver.observe(item);
  });

  const handleInfo = (abbr) => {
    setText(abbr);
  };
  // document.querySelectorAll(".faded").forEach((el) => {
  //   ScrollFade.observe(el);
  // });
  return (
    <main className="home-main">
      {" "}
      <section className="home ">
        <div className="skillsicon">
          <div className="skill"></div>
        </div>

        <img src={Bg} alt="bg" className="bghome" />
        <div ref={Texts} className="hmtextCont ">
          <h1 className="hmtextEl">DAVE - OPS</h1>
        </div>
        {/* <div className="hmauthorCont">
          <img className="hmhero" src="" alt="hero"></img>
        </div> */}
        <div className="hmheroEl">
          <div
            className="hmheroText"
            // style={{
            //   transform: `scale(${1 - 0.1 * 0.1 * offsetY * 0.16})`,
            //   // filter: `opacity(${1 - 2 * offsetY * 0.3})`,
            // }}
          >
            <div className="hmintro">
              <span className="hmsmall">creative </span>
              <h1 className="hmname">Front-End Developer</h1>
              <small className="hmaka">(a.k.a tone-kay)</small>
            </div>
            <div className="hmbtnCont">
              <button className="hmbtns-1">
                <a href={Cv} download>
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
        <h2 className="mark">JK waltson BREW</h2>
        <div ref={Aut} className="hmh-skills">
          <img src={author} alt="h-skill" className="hmheroskills" />
        </div>
      </section>
      <section className="skillshowCont">
        <div className="title faded">
          <h3 className="wlcm">
            {` IMAGINE IT, DEVELOP IT`}
            <br />
            <span id="inner">
              We'll Polish up your ideas and bring them to light.
            </span>
          </h3>
        </div>
        <h1 className="showcase faded">Case Study</h1>
        <div className="skillcont">
          <div className="cont-1">
            <h1 className="topic">CUSTOMER BASED SERVICES</h1>
            <div className="homebgs2">
              <img src={detailImg} alt="details" className="homebg" />
            </div>
          </div>
          <div className="cont-2">
            <h1 className="topic">100% CODE OPTIMIZATION</h1>
            <div className="homebgs1">
              <img src={detailImg_1} alt="details" className="homebg1" />
            </div>
          </div>

          <div className="SKILLS">
            <h1 className="setext">{texts}</h1>
            {SkillText.map((skill, id) => {
              const { text, abbr } = skill;
              return (
                <li className="li" key={id}>
                  <h1 onMouseOver={() => handleInfo(abbr)} className="topic">
                    {text}
                  </h1>
                </li>
              );
            })}
          </div>

          {skills.map((item, idx) => {
            let Position = "";
            let image = "";
            let style = "";

            if (idx === 0) {
              style = "style1";
            }
            if (idx === 0 + 2) {
              style = "style3";
            }
            if (idx >= 3) {
              style = "style4";
            }

            if (idx === 0 + 4) {
              image = "setimg";
            }
            if (idx === 0 + 1) {
              image = "setimg1";
            }
            if (idx > num + 2) {
              Position = "hide";
            }
            if (idx === 0 + 1) {
              Position = "setText";
            }
            return (
              <div key={idx} className="skillshow">
                <cite className={` cite faded  ${image}`}>
                  <img
                    src={item.img}
                    alt="case"
                    className={`skillimg  ${style}`}
                  />
                  <div className="imghover"></div>
                </cite>
                <div className={`textsCont  ${Position}`}>
                  <p className="textskill">{item.text}</p>
                  <div className="texthover"></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Home;
