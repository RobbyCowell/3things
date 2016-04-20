import React from "react";

import Task from "../components/Task";
import * as TaskActions from "../actions/TaskActions";
import TaskStore from "../stores/TaskStore";

export default class TaskList extends React.Component {
  constructor() {
    super();
    this.getTasks = this.getTasks.bind(this);
    this.state = {
      tasks: TaskStore.getAll()
    };
  }

  componentWillMount() {
    TaskStore.on("change", this.getTasks);
  }

  componentWillUnmount() {
    TaskStore.removeListener("change", this.getTasks);
  }

  getTasks() {
    this.setState({
      tasks: TaskStore.getAll()
    });
  }

  createTask(event){
    let task = document.getElementById('task').value;
    TaskActions.createTask(task);
    document.getElementById('task').value = "";
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
        <button onClick={ this.createTask }>Create task</button>
      </div>
    );
  }
}
