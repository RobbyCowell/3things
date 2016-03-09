import React from "react";

import Task from "../components/Task";
import * as TaskActions from "../actions/TaskActions";
import TaskStore from "../stores/TaskStore";

export default class TaskList extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: TaskStore.getAll()
    };
  }

  componentWillMount() {
    TaskStore.on("change", () => {
      this.setState({
        tasks: TaskStore.getAll()
      });
    });
  }

  render() {
    const { tasks } = this.state;
    const TaskComponents = tasks.map((task) => {
      return <Task {...task}/>
    });

    return(
      <div class="components">
        <div>{TaskComponents}</div>
      </div>
    );
  }
}
