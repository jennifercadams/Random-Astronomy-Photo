import React from "react";

import InfoBox from "../../Components/InfoBox/InfoBox";
import MediaContainer from "../../Components/MediaContainer/MediaContainer";
import Buttons from "../../Components/Buttons/Buttons";
import HistoryPanel from "../../Components/HistoryPanel/HistoryPanel";

export default class ByDatePage extends React.Component {
  constructor(props) {
    super(props);
    this.getTodayString = this.getTodayString.bind(this);
  }

  getTodayString() {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US", {timeZone: 'America/New_York'})
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }

  render() {
    return (
      <main>
        <Buttons
          page='byDate'
          getTodayString={this.getTodayString}
          getByDate={this.props.getByDate}
          toggleInfo={this.props.toggleInfo}
          info={this.props.info}        
        />
        <InfoBox
          page='byDate'
          toggleInfo={this.props.toggleInfo}
          info={this.props.info}
          imgSrc={this.props.imgSrc}
          data={this.props.data}
        />
        <MediaContainer
          page='byDate'
          toggleInfo={this.props.toggleInfo}
          imgSrc={this.props.imgSrc}
          videoSrc={this.props.videoSrc}
          data={this.props.data}
        />
        <HistoryPanel history={this.props.history} getFromHistory={this.props.getFromHistory} />
      </main>
    )
  }

  componentDidMount() {
    this.props.getByDate(this.getTodayString());
  }

  componentWillUnmount() {
    this.props.reset();
  }
}