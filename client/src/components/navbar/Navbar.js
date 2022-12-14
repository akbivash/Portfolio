import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrResume } from "react-icons/gr";
import { FaTimes, FaAngleDoubleRight } from "react-icons/fa";
import Sidebar from "../sidebar/Sidebar";
import { useGlobalContext } from "../../context";
import { links } from "../../assets/links";

const Navbar = () => {
  const[resumeTooltip, setResumeTooltip] = useState(false)
  const { handleLinksClick, isMenuOpen, handleMenu } = useGlobalContext();
  let iconStyles = { color: "white", fontSize: "1.5em" };

  function showTooltip(){
setResumeTooltip(true)
  }
  function hideTooltip(){
setResumeTooltip(false)
  }

  return (
    <div className="nav ">
      {/* nav header  */}
      <div className="nav_header">
        <div className="logo">
          <span>
            {" "}
            D
            <span style={{ color: "var(--primary-1)", fontSize: "2rem" }}>
              i
            </span>
            p
          </span>
        </div>
        <div className="nav_btns">
          <div className={`${resumeTooltip ? "show_tooltip resume_btn": "resume_btn"}`} onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
            <img
              src="https://t3.ftcdn.net/jpg/03/77/85/04/360_F_377850455_Gk0rRBzegH6YX9SZK9YbgyYyLwrVb9zi.jpg"
              alt=""
            />
           
          </div>
          <div className="menu_icon" onClick={handleMenu}>
            <span className={`${isMenuOpen ? "hide_icon" : "show_icon"}`}>
              <GiHamburgerMenu />
            </span>
          </div>
        </div>

        <ul className="links_container">
          {links.map((link) => {
            return (
              <a href={link.link} onClick={handleLinksClick} key={link.name}>
                {link.name}
              </a>
            );
          })}
        </ul>

        <div className={`${resumeTooltip ? "show_tooltip desktop resume_btn": " desktop resume_btn"}`} onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
          <img
            src="https://t3.ftcdn.net/jpg/03/77/85/04/360_F_377850455_Gk0rRBzegH6YX9SZK9YbgyYyLwrVb9zi.jpg"
            alt=""
          />
     

        </div>
      </div>
      {/* end of nav header  */}

      <div
        className={`${
          isMenuOpen ? "show_nav_center nav_center" : "nav_center"
        }`}
      >
        <Sidebar />
      </div>

      {/* end of sidebar  */}
    </div>
  );
};

export default Navbar;
