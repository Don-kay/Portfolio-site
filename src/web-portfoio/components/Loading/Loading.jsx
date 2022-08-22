import React from "react";
import bg from "../../asset/rm314-aew-05-x.jpg";
import { motion } from "framer-motion";
import "./Loading.css";

const Loading = () => {
  // variants
  const Container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 0,
      y: 0,
      transition: {
        ease: [0.6, 0.01, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };
  return (
    <motion.main
      variants={Container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="loadermain"
    >
      <img src={bg} className="bg" />
      <section>
        <div variants={item} className="intro">
          <h1>
            Welcome to Dave<span>Tech</span>
          </h1>{" "}
        </div>
        <div className="contain">
          {" "}
          <div className="logo"></div>
          <h3 className="text">
            please wait, this will take just split seconds ...
          </h3>
        </div>
      </section>
    </motion.main>
  );
};

export default Loading;
