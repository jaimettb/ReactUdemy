import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.hendleDecrement = this.hendleDecrement.bind(this);
    this.hendleIncrement = this.hendleIncrement.bind(this);
  }

  hendleDecrement() {
    console.log(this);
    this.setState((curStarte) => {
      return { count: curStarte.count - 1 };
    });
  }

  hendleIncrement() {
    console.log(this);
    this.setState((curStarte) => {
      return { count: curStarte.count + 1 };
    });
  }

  render() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.hendleDecrement}>-</button>
        <span>
          {date.toDateString()} {this.state.count}
        </span>
        <button onClick={this.hendleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
