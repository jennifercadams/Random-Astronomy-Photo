import React from 'react';

export default class AboutBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="about-box"
        style={this.props.about ? {display:'block'} : {display: 'none'}}
      >
        <h2>About This App</h2>
        <div class="text-body">
          <p>This app was made with love by jennsparkles. Data and images are from NASA's Astronomy Picture of the Day API.</p>
          <p>Learn more:</p>
          <ul>
            <li><a href="https://apod.nasa.gov/apod/astropix.html" target="_blank">NASA Astronomy Picture of the Day (APOD)</a></li>
            <li><a href="https://api.nasa.gov/" target="_blank">NASA API portal</a></li>
          </ul>
        </div>
      </div>
    )
  }
}