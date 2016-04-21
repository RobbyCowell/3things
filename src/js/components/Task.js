import React from "react";
import * as TaskActions from "../actions/TaskActions";

export default class Task extends React.Component {
  constructor(props) {
    super();
  }

  completeTask(id) {
    TaskActions.completeTask(id);
  }

  render() {
    const text = this.props.text;
    const complete = this.props.complete;
    const id = this.props.id;

    return (
      <div>
        <p>Task: { text } { complete ? 'complete' : 'pending' }</p>
        <button onClick={ this.completeTask.bind(this, id) }>Complete</button>
      </div>
    );
  }
}
