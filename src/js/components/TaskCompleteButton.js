import React from "react";
import * as TaskActions from "../actions/TaskActions";

export default class TaskCompleteButton extends React.Component {
  constructor(props) {
    super();
  }

  completeTask(id) {
    TaskActions.completeTask(id);
  }

  render() {
    const id = this.props.id;
    return(
      <button onClick={ this.completeTask.bind(this, id) }>Complete</button>
    );
  }
}
