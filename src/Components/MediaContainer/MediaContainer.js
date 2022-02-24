import React from 'react';

export default class MediaContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <figure id={`media-container-${this.props.page}`}>
        {this.props.imgSrc && <img id="photo" src={this.props.imgSrc} alt="" onClick={this.props.toggleInfo} />}
        {this.props.videoSrc && <iframe
          id={`video-${this.props.page}`}
          className="video"
          title="video"
          src={this.props.videoSrc}
          allowFullScreen
        />}
        <figcaption id="caption">{this.props.data.title}</figcaption>
        <p id="date">{this.props.data.date}</p>
      </figure>
    )
  }
}