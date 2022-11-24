import React from "react";
import "./sidebar.css";
import { useGlobalContext } from "../../context";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../../assets/links";

const Sidebar = () => {
  const { isMenuOpen, handleMenu } = useGlobalContext();

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
        width: 100,
        margin: 2,
      }}
    />
  );

  return (
    <div className={`${isMenuOpen ? "show_sidebar sidebar" : "sidebar"}`}>
      <div className="links_header">
      <div className="logo">
          <span> D<span style={{color:"var(--primary-1)", fontSize:'2.4rem'}}>i</span>p</span>
        </div>
        <div className="close_icon" onClick={handleMenu}>
          <FaTimes />
        </div>
      </div>
      <div className="links_container">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.link} className="sidebar_links"
              onClick={handleMenu}
              >
                {link.name}
              </Link>
              <ColoredLine color="#373737" />
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
