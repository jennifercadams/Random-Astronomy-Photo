import './App.css';
import React from 'react';

import Header from '../Header/Header';
import InfoBox from '../InfoBox/InfoBox';
import AboutBox from '../AboutBox/AboutBox';
import MediaContainer from '../MediaContainer/MediaContainer';

const apiKey = 'KHAQuppFd4IUa5bxBR2AMMi9mTqye3iqlWHkTpeu';
const url = 'https://api.nasa.gov/planetary/apod?count=1&api_key=' + apiKey;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      media: false,
      info: false,
      about: false,
      imgSrc: '',
      videoSrc: '',
      data: { date: '', title: '', explanation: '', url: '' },
      retries: 0
    }
    this.getPhoto = this.getPhoto.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
  }

  renderImg(src) {
    return new Promise((resolve, reject) => {
      this.setState({imgSrc: src});
      document.getElementById('photo').onload = () => resolve('success');
      document.getElementById('photo').onerror = () => reject('trying again');
    })
  }

  getPhoto() {
    console.log('getting media...');
    fetch(url)
      .then(response => response.json())
      .then(jsonResponse => {
        this.renderImg(jsonResponse[0].url)
          .then((msg) => {
            console.log(msg);
            this.setState({data: jsonResponse[0]});
          }).catch((reason) => {
            if (this.state.retries < 3) {
              this.setState(prev => ({retries: prev.retries + 1}));
              console.log(reason + ' ' + this.state.retries);
              this.getPhoto();
            } else {
              document.getElementById('media-container').innerHTML = 'Error: Can\'t get media. Try again later.';
            }
          })
      }).then(() => this.setState({media: true, info: false, about: false}))
    
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
          media={this.state.media}
          info={this.state.info}
        />
        <main>
          <InfoBox info={this.state.info} data={this.state.data} />
          <AboutBox about={this.state.about} />
          <MediaContainer
            imgSrc={this.state.imgSrc}
            videoSrc={this.state.videoSrc}
            data={this.state.data}
          />
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
