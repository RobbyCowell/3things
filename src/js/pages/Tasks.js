import React from "react";

import Task from "../components/Task";
import * as TaskActions from "../actions/TaskActions";
import TaskStore from "../stores/TaskStore";

export default class TaskList extends React.Component {
  constructor() {
    super();
    this.getTasks = this.getTasks.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      tasks: TaskStore.getAll(),
      taskCount: TaskStore.getTaskCount()
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
      tasks: TaskStore.getAll(),
      taskCount: TaskStore.getTaskCount()
    });
  }

  createTask(event){
    let task = document.getElementById('task').value;
    TaskActions.createTask(task);
    document.getElementById('task').value = "";
  }

  handleKeyDown (event) {
    if(event.which === 13) {
      this.createTask(event);
    }
  }

  render() {
    const tasks = this.state.tasks;
    const TaskComponents = tasks.map((task) => {
      return <Task key={ task.id } { ...task }/>
    });

    //TODO Add progress bar
    //TODO Add optional description field
    //https://facebook.github.io/react/tips/if-else-in-JSX.html
    return(
      <div class="components">
        <h2>Tasks { this.state.taskCount > 0 ? this.state.taskCount: "" }</h2>
        <p>{ this.state.taskCount > 0 ? this.state.taskCount + " tasks remaining" : "No tasks yet" }</p>
        <div>{ TaskComponents }</div>

        <h3>Add a new task</h3>
        <input id="task" onKeyDown={ this.handleKeyDown }/>
        <button onClick={ this.createTask }>Create task</button>
      </div>
    );
  }
}
