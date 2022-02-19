import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="App-header">
        <h1>Random Astronomy Photo</h1>
        <button id="get-photo" onClick={this.props.getPhoto}>
          {this.props.media ? 'New Photo' : 'Get Photo'}
        </button>
        {this.props.media && <button id="more-info" onClick={this.props.toggleInfo}>
          {this.props.info ? 'Hide Info' : 'More Info'}
        </button>}
        <button onClick={this.props.toggleAbout}>About</button>
      </header>
    )
  }
}