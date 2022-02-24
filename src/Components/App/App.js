import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import RandomPage from '../../Pages/RandomPage/RandomPage';
import ByDatePage from '../../Pages/ByDatePage/ByDatePage';
import AboutPage from '../../Pages/AboutPage/AboutPage';

const apiKey = 'KHAQuppFd4IUa5bxBR2AMMi9mTqye3iqlWHkTpeu';
const fetchRandom = `https://api.nasa.gov/planetary/apod?count=1&thumbs=true&api_key=${apiKey}`;
const fetchByDate = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&thumbs=true&date=`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: false,
      imgSrc: '',
      videoSrc: '',
      data: { date: '', title: '', explanation: '', url: '' },
      retries: 0,
      history: []
    }
    this.reset = this.reset.bind(this);
    this.getRandom = this.getRandom.bind(this);
    this.getByDate = this.getByDate.bind(this);
    this.addToHistory = this.addToHistory.bind(this);
    this.getFromHistory = this.getFromHistory.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
  }

  renderImg(src) {
    return new Promise((resolve, reject) => {
      this.setState({imgSrc: src, videoSrc: ''});
      document.getElementById('photo').onload = () => resolve();
      document.getElementById('photo').onerror = () => reject();
    })
  }

  addToHistory(state) {
    let thumbnail;
    if (state.data.media_type === 'video') {
      thumbnail = state.data.thumbnail_url;
    } else if (state.data.media_type === 'image') {
      thumbnail = state.data.url;
    } else {
      return;
    }
    this.setState({history: [...this.state.history, {
      imgSrc: state.imgSrc,
      videoSrc: state.videoSrc,
      data: state.data,
      thumbnail: thumbnail,
      key: this.state.history.length + 1
    }]});
  }

  retry() {
    if (this.state.retries < 3) {
      this.setState(prev => ({retries: prev.retries + 1}));
      this.getRandom();
    } else {
      document.getElementById('media-container-random').innerHTML = 'Error: Can\'t get media. Try again later.';
    }
  }

  reset() {
    this.setState({
      info: false,
      imgSrc: '',
      videoSrc: '',
      data: { date: '', title: '', explanation: '', url: '' },
      retries: 0
    })
  }

  getRandom() {
    this.addToHistory(this.state);
    this.reset();
    fetch(fetchRandom)
      .then(response => response.json())
      .then(jsonResponse => {
        const data = jsonResponse[0];
        this.setState({data: data});
        if (data.media_type === 'video') {
          this.setState({imgSrc: '', videoSrc: data.url});
        } else {
          this.renderImg(data.url)
            .catch(() => this.retry())
        }
      }).then(() => this.setState({info: false}))
  }

  getByDate(date) {
    const url = fetchByDate + date;
    this.reset();
    fetch(url)
      .then(response => response.json())
      .then(jsonResponse => {
        const data = jsonResponse;
        this.setState({data: data});
        this.addToHistory(data);
        if (data.media_type === 'video') {
          this.setState({imgSrc: '', videoSrc: data.url});
        } else if (data.media_type === 'image') {
          this.renderImg(data.url);
        } else {
          document.getElementById('media-container-byDate').innerHTML = 'Media unavailable. Click "More Info" for permalink to this date\'s APOD page.';
        }
      }).then(() => this.setState({info: false}))
  }

  getFromHistory(target) {
    this.reset();
    this.setState({
      info: false,
      imgSrc: target.imgSrc,
      videoSrc: target.videoSrc,
      data: target.data
    });
  }

  toggleInfo() {
    this.setState(state => ({info: !state.info}))
  }

  render() {
    const randomPage = (
      <RandomPage
        getRandom={this.getRandom}
        toggleInfo={this.toggleInfo}
        reset={this.reset}
        info={this.state.info}
        imgSrc={this.state.imgSrc}
        videoSrc={this.state.videoSrc}
        data={this.state.data}
      />
    );
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Random-Astronomy-Photo/" element={randomPage} />
          <Route path="/Random-Astronomy-Photo/random" element={randomPage} />
          <Route path="/Random-Astronomy-Photo/by-date" element={
            <ByDatePage 
              getByDate={this.getByDate}
              toggleInfo={this.toggleInfo}
              reset={this.reset}
              info={this.state.info}
              imgSrc={this.state.imgSrc}
              videoSrc={this.state.videoSrc}
              data={this.state.data}
            />
          } />
          <Route path="/Random-Astronomy-Photo/about" element={<AboutPage />} />
        </Routes>
        <footer></footer>
      </div>
    );
  }
}

export default App;
