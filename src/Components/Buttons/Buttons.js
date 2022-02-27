import './Buttons.css'
import React from "react";

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({date: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getByDate(this.state.date);
  }

  render() {
    return (
      <div className="buttons">
        {this.props.page === "random" && <button id="get-photo" onClick={this.props.getRandom}>New Photo</button>}
        {this.props.page === "byDate" && <>
          <p>Enter date between June 16, 1995 and today:</p>
          <form onSubmit={this.handleSubmit}>
            <input type="date"
              id="date-input"
              value={this.state.date}
              min="1995-06-16"
              max={this.props.getTodayString()}
              onChange={this.handleChange}
              required
            />
            <input type="submit" id="submit" value="Get Photo" />
          </form>
        </>}
        <button className="more-info" id={`more-info-${this.props.page}`} onClick={this.props.toggleInfo}>
          {this.props.info ? 'Hide Info' : 'More Info'}
        </button>
      </div>
    )
  }
}