import './Buttons.css'
import React from "react";

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="buttons">
        <button id="get-photo" onClick={this.props.getRandom}>New Photo</button>
        <button id="more-info" onClick={this.props.toggleInfo}>
          {this.props.info ? 'Hide Info' : 'More Info'}
        </button>
      </div>
    )
  }
}