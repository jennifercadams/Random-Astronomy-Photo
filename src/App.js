import './App.css';
import React from 'react';
import { renderData } from './helperFunctions';

const apiKey = 'KHAQuppFd4IUa5bxBR2AMMi9mTqye3iqlWHkTpeu';
const url = 'https://api.nasa.gov/planetary/apod?count=1&api_key=' + apiKey;

class App extends React.Component {
  getPhoto() {
    document.getElementById('info-box').style.display = 'none';
    document.getElementById('more-info').innerHTML= 'More Info';
    document.getElementById('about-box').style.display = 'none';
    renderData(url);
  }
  toggleInfo() {
    if (document.getElementById('info-box').style.display === 'none') {
      document.getElementById('more-info').innerHTML = 'Hide Info';
      document.getElementById('info-box').style.display = 'block';
      document.getElementById('about-box').style.display = 'none';
    } else {
      document.getElementById('more-info').innerHTML = 'More Info';
      document.getElementById('info-box').style.display = 'none';
    }
  }
  toggleAbout() {
    if (document.getElementById('about-box').style.display === 'none') {
      document.getElementById('about-box').style.display = 'block';
      document.getElementById('info-box').style.display = 'none';
      document.getElementById('more-info').innerHTML = 'More Info';
    } else {
      document.getElementById('about-box').style.display = 'none';
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Random Astronomy Photo</h1>
          <button id="get-photo" onClick={this.getPhoto}>Get Photo</button>
          <button id="more-info" onClick={this.toggleInfo}>More Info</button>
          <button onClick={this.toggleAbout}>About</button>
        </header>
        <main>
          <div id="info-box" style={{display: 'none'}}>
            <h2 id="info-title"></h2>
            <p id="info-credit" style={{display: 'none'}}></p>
            <p id="info-date"></p>
            <p id="description" class="text-body"></p>
            <p><a id="img-link" href="" target="_blank">See full size photo</a></p>
            <p><a id="apod-permalink" href="" target="_blank">Permalink</a></p>
          </div>
          <div id="about-box" style={{display: 'none'}}>
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
          <figure id='img-container'>
            <img id="photo" src="" alt=""></img>
            <figcaption id="caption"></figcaption>
            <p id="date"></p>
        </figure>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
