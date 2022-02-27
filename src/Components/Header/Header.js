import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import Nav from './Nav/Nav';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nav: false};
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav() {
    this.setState({nav: true})
  }

  closeNav() {
    this.setState({nav: false})
  }

  render() {
    return (
      <header className="App-header">
        {this.state.nav && <div id="overlay"></div>}
        <button id="hamburger" onClick={this.openNav}>&#9776;</button>
        <h1><Link to="/Random-Astronomy-Photo/">Random Astronomy Photo</Link></h1>
        <Nav nav={this.state.nav} closeNav={this.closeNav} />
      </header>
    )
  }
}