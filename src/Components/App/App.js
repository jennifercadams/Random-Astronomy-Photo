import './App.css';
import React from 'react';

import Header from '../Header/Header';
import InfoBox from '../InfoBox/InfoBox';
import AboutBox from '../AboutBox/AboutBox';
import MediaContainer from '../MediaContainer/MediaContainer';

const apiKey = 'KHAQuppFd4IUa5bxBR2AMMi9mTqye3iqlWHkTpeu';
const fetchRandom = `https://api.nasa.gov/planetary/apod?count=1&api_key=${apiKey}`;
const fetchByDate = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=`;

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
    this.getRandom = this.getRandom.bind(this);
    this.getByDate = this.getByDate.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
  }

  renderImg(src) {
    return new Promise((resolve, reject) => {
      this.setState({imgSrc: src, videoSrc: ''});
      document.getElementById('photo').onload = () => resolve();
      document.getElementById('photo').onerror = () => reject();
    })
  }

  retry() {
    if (this.state.retries < 3) {
      this.setState(prev => ({retries: prev.retries + 1}));
      this.getRandom();
    } else {
      document.getElementById('media-container').innerHTML = 'Error: Can\'t get media. Try again later.';
    }
  }

  getRandom() {
    fetch(fetchRandom)
      .then(response => response.json())
      .then(jsonResponse => {
        const data = jsonResponse[0];
        if (data.media_type === 'video') {
          this.setState({imgSrc: '', videoSrc: data.url, data: data});
        } else {
          this.renderImg(data.url)
            .then(() => this.setState({data: data}))
            .catch(() => this.retry())
        }
      }).then(() => this.setState({media: true, info: false, about: false}))
    
  }

  getByDate(date) {
    const url = fetchByDate + date;
    fetch(url)
      .then(response => response.json())
      .then(jsonResponse => {
        const data = jsonResponse[0];
        if (data.media_type === 'video') {
          this.setState({imgSrc: '', videoSrc: data.url, data: data});
        } else if (data.media_type === 'image') {
          this.renderImg(data.url)
            .then(() => this.setState({data: data}))
        } else {
          document.getElementById('media-container').innerHTML = 'Media unavailable. Click "More Info" for permalink to this date\'s APOD page.';
          this.setState({data: data})
        }
      })
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
          getRandom={this.getRandom}
          toggleInfo={this.toggleInfo}
          toggleAbout={this.toggleAbout}
          media={this.state.media}
          info={this.state.info}
        />
        <main>
          <InfoBox
            info={this.state.info}
            imgSrc={this.state.imgSrc}
            data={this.state.data}
          />
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
