import React from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li><NavLink to="/Random-Astronomy-Photo/random">Random</NavLink></li>
        <li><NavLink to="/Random-Astronomy-Photo/by-date">By Date</NavLink></li>
        <li><NavLink to="/Random-Astronomy-Photo/about">About</NavLink></li>
        <li><a href="#history">My Photos</a></li>
      </ul>
    )
  }
}