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
        <Buttons
          page='random'
          getRandom={this.props.getRandom}
          toggleInfo={this.props.toggleInfo}
          info={this.props.info}        
        />
        <InfoBox
          page='random'
          toggleInfo={this.props.toggleInfo}
          info={this.props.info}
          imgSrc={this.props.imgSrc}
          data={this.props.data}
        />
        <MediaContainer
          page='random'
          toggleInfo={this.props.toggleInfo}
          imgSrc={this.props.imgSrc}
          videoSrc={this.props.videoSrc}
          data={this.props.data}
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