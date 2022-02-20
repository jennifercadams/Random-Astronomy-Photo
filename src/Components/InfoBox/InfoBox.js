import React from 'react';

export default class InfoBox extends React.Component {
  constructor(props) {
    super(props);
  }

  convertToPermalink() {
    let formattedDate = this.props.data.date.substring(2).replace(/-/g, '');
    return `https://apod.nasa.gov/apod/ap${formattedDate}.html`;
  }

  render() {
    return (
      <div id="info-box" onClick={() => this.props.toggleBox('info')}
        style={this.props.info ? {display:'block'} : {display: 'none'}}
      >
        <h2 id="info-title">{this.props.data.title}</h2>
        {this.props.data.copyright && <p id="info-credit">Credit: {this.props.data.copyright}</p>}
        <p id="info-date">{this.props.data.date}</p>
        <p id="description" class="text-body">{this.props.data.explanation}</p>
        {this.props.imgSrc && <p><a id="img-link" href={this.props.data.url} target="_blank">Full size photo</a></p>}
        <p><a id="apod-permalink" href={this.convertToPermalink()} target="_blank">Permalink</a></p>
      </div>
    )
  }
}