import React, { Component } from 'react';

const Problematic = () => {
  alert('에러발생')
  return (
    <div>
      에러발생
    </div>
  );
};

class Counter extends Component {
  state = {
    number: 0,
    error: false
  }

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }

  handleDecrease = () => {
    this.setState(
      ({ number }) => ({
        number: number - 1
      })
    )
  }

  render() {
    if (this.state.error) return (<h1>에러발생!</h1>);

    return (
      <div>
        <strong>카운터</strong>
        <p>값: {this.state.number}</p>
        { this.state.number === 4 && <Problematic /> }
        <button type="button" onClick={this.handleDecrease}>-</button>
        <button type="button" onClick={this.handleIncrease}>+</button>
      </div>
    )
  }

}

export default Counter;