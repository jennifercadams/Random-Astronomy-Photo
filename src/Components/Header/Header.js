import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav/Nav';

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1><Link to="/Random-Astronomy-Photo/">Random Astronomy Photo</Link></h1>
        <Nav />
      </header>
    )
  }
}