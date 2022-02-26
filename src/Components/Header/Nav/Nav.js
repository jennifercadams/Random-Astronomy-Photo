import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <ul>
      <li><NavLink to="/Random-Astronomy-Photo/random">Random</NavLink></li>
      <li><NavLink to="/Random-Astronomy-Photo/by-date">By Date</NavLink></li>
      <li><NavLink to="/Random-Astronomy-Photo/about">About</NavLink></li>
      {path !== "/Random-Astronomy-Photo/about" && <li><a href="#history">My Photos</a></li>}
    </ul>
  )
}