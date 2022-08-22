import React from "react";
import "./submenu_2.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context";
import Trust from "../../trust comp/trust";
import { FaHouseUser, FaBox, FaFileArchive, FaPhone } from "react-icons/fa";
const Submenu2 = () => {
  const { navAxis } = useGlobalContext();
  return (
    <main>
      <div className={navAxis ? "sub-2  sub-anim" : "sub-2 "}>
        <ul className="nav2">
          <Link to={"/"}>
            <li className="nav">
              <FaHouseUser className="icons" />
            </li>
          </Link>
          <Link to={"./about"}>
            <li className="nav">
              <FaBox className="icons" />
            </li>
          </Link>
          <Link to={"./trust"}>
            <li className="nav">
              <FaPhone className="icons" />
            </li>
          </Link>
        </ul>
      </div>
    </main>
  );
};

export default Submenu2;
