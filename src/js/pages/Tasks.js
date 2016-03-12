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

  createTask(event){
    var task = document.getElementById('task');
    TaskActions.createTask(task.value);
    task.value = "";
  }

  render() {
    const { tasks } = this.state;
    const TaskComponents = tasks.map((task) => {
      return <Task key={task.id} {...task}/>
    });

    return(
      <div class="components">
        <div>{TaskComponents}</div>
        <input id="task" />
        <button onClick={this.createTask.bind(this)}>Create task</button>
      </div>
    );
  }
}
