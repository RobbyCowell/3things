import React from "react";
import * as TaskActions from "../actions/TaskActions";

import TaskCompleteButton from "../components/TaskCompleteButton";
import TaskIncompleteButton from "../components/TaskIncompleteButton";

export default class Task extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const text = this.props.text;
    const complete = this.props.complete;
    const id = this.props.id;

    let button;

    if(complete) {
      button = <TaskIncompleteButton { ...this.props }/>;
    } else {
      button = <TaskCompleteButton { ...this.props }/>;
    }

    return (
      <div>
        <p>Task: { text } { complete ? 'complete' : 'pending' }</p>
        { button }
      </div>
    );
  }
}
