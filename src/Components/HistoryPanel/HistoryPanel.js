import './HistoryPanel.css';
import React from "react";

import Thumbnail from "./Thumbnail/Thumbnail";

export default class HistoryPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const thumbnails = this.props.history.map((thumb, i) => <a key={`a-${thumb.data.date}`} href="#"><Thumbnail 
      key={`Thumbnail-${thumb.data.date}`}
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
        <p><a href="#">Return to Top</a></p>
      </div>
    )
  }
}