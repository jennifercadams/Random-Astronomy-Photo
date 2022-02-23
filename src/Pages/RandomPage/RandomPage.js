import React from "react";

import InfoBox from "../../Components/InfoBox/InfoBox";
import MediaContainer from "../../Components/MediaContainer/MediaContainer";
import Buttons from "../../Components/Buttons/Buttons";

export default class RandomPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <InfoBox
          toggleInfo={this.props.toggleInfo}
          info={this.props.info}
          imgSrc={this.props.imgSrc}
          data={this.props.data}
        />
        <MediaContainer
          toggleInfo={this.props.toggleInfo}
          imgSrc={this.props.imgSrc}
          videoSrc={this.props.videoSrc}
          data={this.props.data}
        />
        <Buttons
          getRandom={this.props.getRandom}
          toggleInfo={this.props.toggleInfo}
          info={this.props.info}        
        />
      </main>
    )
  }

  componentDidMount() {
    this.props.getRandom();
  }

  componentWillUnmount() {
    this.props.reset();
  }
}