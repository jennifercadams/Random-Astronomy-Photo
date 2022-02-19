import React from 'react';

export default class ImageContainer extends React.Component {
  render() {
    return (
      <figure id='img-container'>
        <img id="photo" src="" alt=""></img>
        <figcaption id="caption"></figcaption>
        <p id="date"></p>
      </figure>
    )
  }
}