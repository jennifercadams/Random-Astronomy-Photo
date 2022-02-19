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
      info: false,
      about: false
    }
    this.getPhoto = this.getPhoto.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
  }
  getPhoto() {
    this.setState({info: false, about: false})
    renderData(url);
  }
  toggleInfo() {
    if (!this.state.info) {
      this.setState({info: true, about: false})
    } else {
      this.setState({info: false})
    }
  }
  toggleAbout() {
    if (!this.state.about) {
      this.setState({info: false, about: true})
    } else {
      this.setState({about: false})
    }
  }
  render() {
    return (
      <div className="App">
        <Header
          getPhoto={this.getPhoto}
          toggleInfo={this.toggleInfo}
          toggleAbout={this.toggleAbout}
          info={this.state.info}
        />
        <main>
          <InfoBox info={this.state.info} />
          <AboutBox about={this.state.about} />
          <ImageContainer />
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
