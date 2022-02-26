import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <ul>
      <NavLink to="/Random-Astronomy-Photo/random"><li>Random</li></NavLink>
      <NavLink to="/Random-Astronomy-Photo/by-date"><li>By Date</li></NavLink>
      <NavLink to="/Random-Astronomy-Photo/about"><li>About</li></NavLink>
      {path !== "/Random-Astronomy-Photo/about" && <a href="#history"><li>My Photos</li></a>}
    </ul>
  )
}