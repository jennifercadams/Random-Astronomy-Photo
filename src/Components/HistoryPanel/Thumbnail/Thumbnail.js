import React from "react";

export default class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="thumbnail" onClick={() => this.props.getFromHistory(this.props.data)}>
        <img src={this.props.thumbnail} alt={this.props.title} />
        <p>{this.props.date}</p>
      </div>
    )
  }
}