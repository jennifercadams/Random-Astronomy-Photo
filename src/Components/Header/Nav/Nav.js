import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/Random-Astronomy-Photo/random">Random</Link></li>
        <li><Link to="/Random-Astronomy-Photo/by-date">By Date</Link></li>
        <li><Link to="/Random-Astronomy-Photo/about">About</Link></li>
      </ul>
    )
  }
}