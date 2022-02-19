import React from 'react';

export default class MediaContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <figure id="media-container">
        {this.props.imgSrc && <img id="photo" src={this.props.imgSrc} alt="" />}
        {this.props.videoSrc && <iframe id="video" title="video" src={this.props.videoSrc} allowFullScreen />}
        <figcaption id="caption">{this.props.data.title}</figcaption>
        <p id="date">{this.props.data.date}</p>
      </figure>
    )
  }
}