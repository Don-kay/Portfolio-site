import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./Sidebar.css";

const Sidebar = () => {
  const { sideBarOpen } = useGlobalContext();
  return (
    <>
      {sideBarOpen ? (
        <ul className="ul">
          <Link to={"/"}>
            <li className="li">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="li">About</li>
          </Link>
          <Link to={"/about"}>
            <li className="li">Projects</li>
          </Link>
        </ul>
      ) : null}
    </>
  );
};

export default Sidebar;
