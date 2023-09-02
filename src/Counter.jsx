import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue,
    };
  }

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  reset = () => {
    this.setState({
      count: this.props.initialValue,
    });
  };

  render() {
    return (
      <div>
        <h1>ДЗ 29. Counter</h1>
        <div className="counter">
          <h2>Counter App</h2>
          <div className="count">{this.state.count}</div>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
          <button onClick={this.reset} className="reset">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;


