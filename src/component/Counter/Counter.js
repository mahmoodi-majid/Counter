import React, { Component } from "react";
import "./Counter.css";
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Count: 0,
    };
  }
  addCount() {
    this.setState((prevState) => {
      return { Count: prevState.Count + 1 };
    });
  }
  lowerCount() {
    this.setState((prevState) => {
      return { Count: prevState.Count - 1 };
    });
  }

  render() {
    return (
      <div>
        <section id="main">
          <div className="container">
            <h2 id="title">Counter</h2>
            <h3 id="counter">{this.state.Count}</h3>
          </div>
          <div className="btn-container">
            <button id="add" onClick={this.addCount.bind(this)}>
              Add Count
            </button>
            <button id="lower" onClick={this.lowerCount.bind(this)}>
              Lower Count
            </button>
          </div>
        </section>
      </div>
    );
  }
}
