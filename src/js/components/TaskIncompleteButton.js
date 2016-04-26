import React from "react";
import * as TaskActions from "../actions/TaskActions";

export default class TaskIncompleteButton extends React.Component {
  constructor(props) {
    super();
  }

  uncompleteTask(id) {
    TaskActions.uncompleteTask(id);
  }

  render() {
    const id = this.props.id;
    return(
      <button type="button" className="button" onClick={ this.uncompleteTask.bind(this, id) }>Mark as uncomplete</button>
    );
  }
}
