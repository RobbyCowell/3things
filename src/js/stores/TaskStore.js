import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TaskStore extends EventEmitter {
  constructor() {
    super();
    this.tasks = [
      {
        id: 1,
        task: "This is a completed task",
        complete: true
      }
    ];
  }

  createTask(task) {
    const id = Date.now();
    this.tasks.push({
      id,
      task,
      complete: false
    });
    this.emit("change");
  }

  getAll() {
    return this.tasks;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TASK": {
        this.createTask(action.task);
      }
    }
  }

}

const taskStore = new TaskStore;

dispatcher.register(taskStore.handleActions.bind(taskStore));

export default taskStore;
