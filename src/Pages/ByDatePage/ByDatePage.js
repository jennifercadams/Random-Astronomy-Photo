import React from "react";

import InfoBox from "../../Components/InfoBox/InfoBox";
import MediaContainer from "../../Components/MediaContainer/MediaContainer";
import Buttons from "../../Components/Buttons/Buttons";

export default class ByDatePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Buttons
          page='byDate'
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
      </main>
    )
  }

  componentWillUnmount() {
    this.props.reset();
  }
}