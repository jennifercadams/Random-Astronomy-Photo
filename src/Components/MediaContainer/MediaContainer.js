import './MediaContainer.css';
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
        <p id="details">
          {this.props.data.copyright && <span><strong>Copyright: </strong>{this.props.data.copyright}</span>}
          {this.props.data.copyright && <span id="divider-span">&ensp;|&ensp;</span>}
          <span><strong>APOD date: </strong>{this.props.data.date}</span>
        </p>
      </figure>
    )
  }
}