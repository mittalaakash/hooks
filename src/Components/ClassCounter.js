import React, { Component } from 'react';

class ClassCounter extends Component {
  state = {
    count: 0,
  };
  //   componentDidUpdate() {
  //     console.log(this.state.count);
  //   }
  incrementer = () => {
    this.setState(
      prevState => ({ count: prevState.count + 1 }),
      () => {
        console.log(this.state.count);
      },
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementer}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounter;
