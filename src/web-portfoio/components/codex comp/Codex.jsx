import React from "react";
import Navigation from "../navigation comp/navigation";
import Hero from "../Hero comp/hero";
// import Sidebar from "../Side Bar comp/Sidebar";
import Submenu2 from "../submenu comp/submenufixed/submenu2";
import Home from "../home comp/home";
import "./Codex.css";
import Trust from "../trust comp/trust";
const Codex = () => {
  return (
    <>
      <main className="mainBg">
        <Navigation />
        <Hero />
        <Home />
        <Submenu2 />
        <div
          // className="footer"
          style={{
            position: "relative",
            top: "580vh",
            backgroundColor: "black",
            minHeight: "calc(110vh - 390px)",
            zIndex: "0",
          }}
        >
          <Trust />
        </div>
      </main>
    </>
  );
};

export default Codex;
