import React, { Component } from "react";
class Card extends Component {
  state = {};
  render() {
    return (
      <div className="weather-card">
        <div className="weather-card--landmark">
          <div className="landmark">
            <img src={this.props.movie.image} />
          </div>
          <div className="clouds" />
        </div>
        <div className="weather-card--cityname">
          <h1>{this.props.movie.name}</h1>
        </div>
        <div className="weather-card--details">
          <span className="details--date">{this.props.movie.type}</span>|
        </div>
        <div className="weather-card--temperature">
          <ul>
            <li className="outer-temp" />
            <li className="mid-temp left-50" />
            <li className="current-temp">{this.props.movie.year}</li>
            <li className="mid-temp right-50" />
            <li className="outer-temp" />
          </ul>
        </div>
      </div>
    );
  }
}

export default Card;
