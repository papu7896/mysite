import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navbar = () => {
  const [toggle, setToggle] = useState(false);
  const activeStyle = {
    textDecoration: "underline",
    color: "yellow",
  };
  const normal = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <div className="nav" style={{ backgroundColor: "black", padding: "10px" }}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button onClick={() => setToggle(!toggle)}>menu</button>
      </div>
      {toggle && (
        <div>
          <div className="navLink">
            <NavLink
              to="/home"
              style={({ isActive }) => (isActive ? activeStyle : normal)}
            >
              HOME
            </NavLink>
          </div>
          <div className="navLink">
            <NavLink
              to="/skills"
              style={({ isActive }) => (isActive ? activeStyle : normal)}
            >
              SKILLS
            </NavLink>
          </div>
          <div className="navLink">
            <NavLink
              to="/experience"
              style={({ isActive }) => (isActive ? activeStyle : normal)}
            >
              EXPERIENCE
            </NavLink>
          </div>
          <div className="navLink">
            <NavLink
              to="/contact "
              style={({ isActive }) => (isActive ? activeStyle : normal)}
            >
              CONTACT{" "}
            </NavLink>
          </div>
        </div>
      )}
      <div className="link">
        <NavLink
          to="/home"
          style={({ isActive }) => (isActive ? activeStyle : normal)}
        >
          HOME
        </NavLink>

        <NavLink
          to="/skills"
          style={({ isActive }) => (isActive ? activeStyle : normal)}
        >
          SKILLS
        </NavLink>
        <NavLink
          to="/experience"
          style={({ isActive }) => (isActive ? activeStyle : normal)}
        >
          EXPERIENCE
        </NavLink>
        <NavLink
          to="/contact "
          style={({ isActive }) => (isActive ? activeStyle : normal)}
        >
          CONTACT{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default navbar;
