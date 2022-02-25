import React from "react";
import Thumbnail from "./Thumbnail/Thumbnail";

export default class HistoryPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const thumbnails = this.props.history.map(thumb => <Thumbnail 
      key={thumb.key}
      thumbnail={thumb.thumbnail}
      date={thumb.data.date}
      title={thumb.data.title}
      data={thumb}
      getFromHistory={this.props.getFromHistory}
    />
    );
    return (
      <div>{thumbnails}</div>
    )
  }
}