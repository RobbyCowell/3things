import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TaskStore extends EventEmitter {
  constructor() {
    super();
    this.tasks = [
      {
        id: 1,
        text: "This is a completed task",
        complete: true
      }
    ];
  }

  createTask(text) {
    const id = Date.now();
    this.tasks.push({
      id,
      text,
      complete: false
    });
    this.emit("change");
  }

  completeTask(id) {
    const task = this.tasks.filter(function(task) {
      return task.id === id;
    })[0];

    task.complete = true;

    this.emit("change");
  }

  getAll() {
    return this.tasks;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TASK": {
        this.createTask(action.text);
        break;
      }
      case "COMPLETE_TASK": {
        this.completeTask(action.id);
        break;
      }
    }
  }

}

const taskStore = new TaskStore;

dispatcher.register(taskStore.handleActions.bind(taskStore));

export default taskStore;
