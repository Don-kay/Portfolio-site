import React from "react";
import { navlinks } from "../data";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import logo from "../../asset/ksansnew.png";
import "./navigation.css";
import { useGlobalContext } from "../../context";

const Navigation = () => {
  const {
    TargetAxis,
    NavSuccess,
    NavFailed,
    openSideBar,
    closeSideBar,
    sideBarOpen,
  } = useGlobalContext();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 920) {
        NavSuccess();
      } else {
        NavFailed();
      }
    });
  }, [NavFailed, NavSuccess]);

  const Sidebar = () => {
    openSideBar();
  };
  const closebar = () => {
    closeSideBar();
  };

  return (
    <>
      <section className="navar">
        <nav className={TargetAxis ? "navig navig-2" : "navig"}>
          <div className="nav-container">
            <img className="logo" src={logo} alt="Logo"></img>
            <button className="my-btn">Contact</button>
            <button
              onClick={sideBarOpen ? closebar : Sidebar}
              className="Toggle-btn"
            >
              {sideBarOpen ? "x" : <FaBars />}
            </button>
          </div>
          <div className="navlinks">
            {navlinks.map((nav, id) => {
              return (
                <>
                  <Link to={nav.url}>
                    <li key={id}>
                      <button className="navlink-btn">{nav.pages}</button>
                    </li>
                  </Link>
                </>
              );
            })}
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navigation;
