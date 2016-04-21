import React from "react";

import Task from "../components/Task";
import * as TaskActions from "../actions/TaskActions";
import TaskStore from "../stores/TaskStore";

export default class TaskList extends React.Component {
  constructor() {
    super();
    this.getTasks = this.getTasks.bind(this);
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

  render() {
    const tasks = this.state.tasks;
    const TaskComponents = tasks.map((task) => {
      return <Task key={task.id} {...task}/>
    });

    //TODO Add progress bar
    //TODO Add optional description field
    //TODO Make the 'Enter' key submit the form, make this a form rather than a single input maybe
    //https://facebook.github.io/react/tips/if-else-in-JSX.html
    return(
      <div class="components">
        <p>{ this.state.taskCount > 0 ? this.state.taskCount + " tasks remaining" : "No tasks yet" }</p>
        <div>{TaskComponents}</div>
        <input id="task" />
        <button onClick={ this.createTask }>Create task</button>
      </div>
    );
  }
}
