import { Component } from "react";

class Child extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     userInput: "",
  //   };
  // }

  render() {
    return (
      <div>
        <h1>Child Component </h1>
        {/* <h2>{this.state.userInput}</h2>
        <input
          type="text"
          onChange={(e) => this.setState({ userInput: e.target.value })}
        />{" "}
        */}
        <h2>{this.props.userInput}</h2>
      </div>
    );
  }
}

export default Child;
