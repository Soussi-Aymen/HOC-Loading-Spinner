import React, { Component } from "react";
import "./App.css";
import MDSpinner from "react-md-spinner";
import Card from "./Card";

class App extends Component {
  state = {
    isLoading: true,
    movie: {
      image:
        "https://yts.am/assets/images/movies/The_Matrix_Reloaded_2003/medium-cover.jpg",
      name: "The Matrix Reloaded",
      type: "Action",
      year: 2003
    }
  };
  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 2000); // do your async call
  }
  render() {
    if (this.state.isLoading) {
      return <MDSpinner className="center-spinner" size={200} />;
    }
    return (
      <div className="App">
        <Card movie={this.state.movie} />
      </div>
    );
  }
}

export default App;
