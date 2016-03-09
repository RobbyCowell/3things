import React from "react";

export default class Task extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const text = this.props.text;
    const complete = this.props.complete;

    return (
      <p>Task: {text}</p>
    );
  }
}
