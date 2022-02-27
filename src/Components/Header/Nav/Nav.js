import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Nav(props) {
  const location = useLocation();
  const path = location.pathname;
  const { nav, closeNav } = props;

  return (
    <div id="nav" style={nav ? {display: 'block'} : {display: 'none'}}>
      <button id="close" onClick={closeNav}>X</button>
      <ul>
        <NavLink to="/Random-Astronomy-Photo/random" onClick={closeNav}><li>Random</li></NavLink>
        <NavLink to="/Random-Astronomy-Photo/by-date" onClick={closeNav}><li>By Date</li></NavLink>
        <NavLink to="/Random-Astronomy-Photo/about" onClick={closeNav}><li>About</li></NavLink>
        {path !== "/Random-Astronomy-Photo/about" && <a href="#history" onClick={closeNav}><li>My Photos</li></a>}
      </ul>
    </div>
  )
}