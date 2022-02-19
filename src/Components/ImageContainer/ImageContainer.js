import React from 'react';

export default class ImageContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <figure id='img-container'>
        <img id="photo" src={this.props.imgSrc} alt=""></img>
        <figcaption id="caption">{this.props.data.title}</figcaption>
        <p id="date">{this.props.data.date}</p>
      </figure>
    )
  }
}