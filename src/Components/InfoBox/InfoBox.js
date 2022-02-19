import React from 'react';

export default class InfoBox extends React.Component {
  render() {
    return (
      <div id="info-box" style={{display: 'none'}}>
        <h2 id="info-title"></h2>
        <p id="info-credit" style={{display: 'none'}}></p>
        <p id="info-date"></p>
        <p id="description" class="text-body"></p>
        <p><a id="img-link" href="" target="_blank">See full size photo</a></p>
        <p><a id="apod-permalink" href="" target="_blank">Permalink</a></p>
      </div>
    )
  }
}