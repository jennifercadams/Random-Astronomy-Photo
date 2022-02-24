import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import RandomPage from '../../Pages/RandomPage/RandomPage';
import ByDatePage from '../../Pages/ByDatePage/ByDatePage';
import AboutPage from '../../Pages/AboutPage/AboutPage';

const apiKey = 'KHAQuppFd4IUa5bxBR2AMMi9mTqye3iqlWHkTpeu';
const fetchRandom = `https://api.nasa.gov/planetary/apod?count=1&api_key=${apiKey}`;
const fetchByDate = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: false,
      imgSrc: '',
      videoSrc: '',
      data: { date: '', title: '', explanation: '', url: '' },
      retries: 0
    }
    this.getRandom = this.getRandom.bind(this);
    this.getByDate = this.getByDate.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
    this.reset = this.reset.bind(this);
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
      }).then(() => this.setState({info: false}))
  }

  getByDate(date) {
    const url = fetchByDate + date;
    fetch(url)
      .then(response => response.json())
      .then(jsonResponse => {
        const data = jsonResponse;
        if (data.media_type === 'video') {
          this.setState({imgSrc: '', videoSrc: data.url, data: data});
        } else if (data.media_type === 'image') {
          this.renderImg(data.url)
            .then(() => this.setState({data: data}))
        } else {
          document.getElementById('media-container').innerHTML = 'Media unavailable. Click "More Info" for permalink to this date\'s APOD page.';
          this.setState({data: data})
        }
      }).then(() => this.setState({info: false}))
  }

  toggleInfo() {
    this.setState(state => ({info: !state.info}))
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
