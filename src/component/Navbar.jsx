import React from 'react'
import {NavLink} from "react-router-dom";


const navbar = () => {
  const activeStyle = {
    textDecoration: "underline",
    color: "yellow"
    
  };
  const normal={
    textDecoration: "none",
  color: "white",
  }
  return (
    <div className="nav" style={{backgroundColor:'black',height:"1.5cm"}}>
        <div className="link">
    <NavLink to="/home" style={({ isActive }) =>
              isActive ? activeStyle :  normal
            }>HOME</NavLink>
  
  <NavLink to="/skills" style={({ isActive }) =>
              isActive ? activeStyle :  normal
            }>SKILLS</NavLink>
  <NavLink to="/experience" style={({ isActive }) =>
              isActive ? activeStyle :  normal
            }>EXPERIENCE</NavLink>
  <NavLink to="/contact " style={({ isActive }) =>
              isActive ?activeStyle : normal
            }>CONTACT </NavLink>
        </div>
    </div>
    
  
  )
}

export default navbar;