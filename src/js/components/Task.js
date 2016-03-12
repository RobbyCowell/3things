import React from "react";

export default class Task extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const task = this.props.task;
    const complete = this.props.complete;

    return (
      <p>Task: {task} {complete ? 'complete' : 'pending'}</p>
    );
  }
}
