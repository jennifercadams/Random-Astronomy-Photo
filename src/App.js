import './App.css';
import React from 'react';

const apiKey = 'KHAQuppFd4IUa5bxBR2AMMi9mTqye3iqlWHkTpeu';
const url = 'https://api.nasa.gov/planetary/apod?count=1&api_key=' + apiKey;
let photoData;

const convertToPermalink = (date) => {
  let formattedDate = date.substring(2).replace(/-/g, '');
  return `https://apod.nasa.gov/apod/ap${formattedDate}.html`;
};

const renderPhoto = (photoData) => {
  let date = photoData.date;
  let title = photoData.title;
  let description = photoData.explanation;
  let imgSrc = photoData.url;
  let permalink = convertToPermalink(date);
  document.getElementById('photo').src = imgSrc;
  document.getElementById('caption').innerHTML = title;
  document.getElementById('info-title').innerHTML = title;
  document.getElementById('date').innerHTML = date;
  document.getElementById('info-date').innerHTML = date;
  document.getElementById('more-info').style.display = 'inline-block';
  document.getElementById('description').innerHTML = description;
  document.getElementById('img-link').href = imgSrc;
  document.getElementById('apod-permalink').href = permalink;
}

class App extends React.Component {
  getPhoto() {
    const infoBox = document.getElementById('info-box');
    const infoButton = document.getElementById('more-info');
    const aboutBox = document.getElementById('about-box');
    infoBox.style.display = 'none';
    infoButton.innerHTML= 'More Info';
    aboutBox.style.display = 'none';
    console.log('getting photo...')
    fetch(url)
      .then(response => response.json())
      .then(data => {
        photoData = data[0];
        renderPhoto(photoData);
      })
  }
  toggleInfo() {
    const infoBox = document.getElementById('info-box');
    const infoButton = document.getElementById('more-info');
    const aboutBox = document.getElementById('about-box');
    if (infoBox.style.display === 'none') {
      infoButton.innerHTML = 'Hide Info';
      infoBox.style.display = 'block';
      aboutBox.style.display = 'none';
    } else {
      infoButton.innerHTML = 'More Info';
      infoBox.style.display = 'none';
    }
  }
  toggleAbout() {
    const infoBox = document.getElementById('info-box');
    const infoButton = document.getElementById('more-info');
    const aboutBox = document.getElementById('about-box');
    if (aboutBox.style.display === 'none') {
      aboutBox.style.display = 'block';
      infoBox.style.display = 'none';
      infoButton.innerHTML = 'More Info';
    } else {
      aboutBox.style.display = 'none';
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Random Astronomy Photo</h1>
          <button onClick={this.getPhoto}>Get Photo</button>
          <button id="more-info" onClick={this.toggleInfo}>More Info</button>
          <button onClick={this.toggleAbout}>About</button>
          <div id="info-box" style={{display: 'none'}}>
            <h2 id="info-title"></h2>
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
                <li><a href="https://apod.nasa.gov/apod/astropix.html">NASA Astronomy Picture of the Day (APOD)</a></li>
                <li><a href="https://api.nasa.gov/">NASA API portal</a></li>
              </ul>
            </div>
          </div>
          <figure>
            <img id="photo" src="" alt=""></img>
            <figcaption id="caption"></figcaption>
            <p id="date"></p>
          </figure>
        </header>
      </div>
    );
  }
}

export default App;
