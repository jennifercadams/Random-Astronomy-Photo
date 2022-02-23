import './Header.css';
import React from 'react';
import Nav from './Nav/Nav';

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1>Random Astronomy Photo</h1>
        <Nav />
      </header>
    )
  }
}