import React from "react";
import { useState, useEffect } from "react";
// import hero from "../../asset/pawel-czerwinski-GFqo8rVmH30-unsplash.jpg";
import HeroImg from "../../asset/9232326.png";
import author from "../../asset/IMG-20210512-WA0033.png";
import Cv from "../../asset/webresume.pdf";
// import Element1 from "../../asset/illusr 1 .jpeg";
import "./hero.css";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className="mainHero"
      style={{ backgroundColor: `black(${100 - offsetY * 2.5}px)` }}
    >
      <section className="heroItems">
        <div
          className="textCont"
          style={{ transform: `translateX(${100 + offsetY * 2.5}px)` }}
        >
          <h1 className="textEl">DEVELOPER</h1>
        </div>

        <div className="authorCont">
          <img className="hero" src={author} alt="hero"></img>
        </div>

        <div className="heroEl">
          <div
            className="heroText"
            style={{
              transform: `scale(${1 - 0.1 * 0.1 * offsetY * 0.1})`,
              // filter: `opacity(${1 - 2 * offsetY * 0.3})`,
            }}
          >
            <div className="intro">
              <span className="small">Hi, I am </span>
              <h1 className="name">David Chiemeka</h1>
              <small className="aka">(a.k.a tone-kay)</small>
            </div>
            <div className="mybtn">
              <button className="mybtn1">
                <a href={Cv}>Download CV</a>
              </button>
            </div>
            {/* <h1 className="text">Welcome to a world of endless possibility</h1> */}
          </div>
        </div>
        <div
          className="h-skills"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <img src={HeroImg} alt="h-skill" className="heroskills" />
        </div>
      </section>
    </main>
  );
};

export default Hero;
