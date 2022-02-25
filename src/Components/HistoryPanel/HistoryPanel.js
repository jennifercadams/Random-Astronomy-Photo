import './HistoryPanel.css';
import React from "react";

import Thumbnail from "./Thumbnail/Thumbnail";

export default class HistoryPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const thumbnails = this.props.history.map(thumb => <a href="#"><Thumbnail 
      key={thumb.key}
      thumbnail={thumb.thumbnail}
      date={thumb.data.date}
      title={thumb.data.title}
      data={thumb}
      getFromHistory={this.props.getFromHistory}
    /></a>
    );
    return (
      <div id="history">
        <h2>My Astronomy Photos</h2>
        <div id="thumbs-container">{thumbnails}</div>
      </div>
    )
  }
}