import './App.css';
import React from 'react';

import Header from '../Header/Header';
import InfoBox from '../InfoBox/InfoBox';
import AboutBox from '../AboutBox/AboutBox';
import ImageContainer from '../ImageContainer/ImageContainer';

import { renderData } from '../../util/renderData';

const apiKey = 'KHAQuppFd4IUa5bxBR2AMMi9mTqye3iqlWHkTpeu';
const url = 'https://api.nasa.gov/planetary/apod?count=1&api_key=' + apiKey;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.getPhoto = this.getPhoto.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
  }
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
        <Header
          getPhoto={this.getPhoto}
          toggleInfo={this.toggleInfo}
          toggleAbout={this.toggleAbout}
        />
        <main>
          <InfoBox />
          <AboutBox />
          <ImageContainer />
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
