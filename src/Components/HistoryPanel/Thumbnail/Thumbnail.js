import React from "react";

export default class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const date = this.props.date;
    return (
      <div key={`div-${date}`} className="thumbnail" onClick={() => this.props.getFromHistory(this.props.data)}>
        <img key={`img-${date}`} src={this.props.thumbnail} alt={this.props.title} />
        <p key={`p-${date}`}>{date}</p>
      </div>
    )
  }
}