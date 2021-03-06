import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import * as NotificationUtility from "../utilities/NotificationUtility";

class TaskStore extends EventEmitter {
  constructor() {
    super();
    this.tasks = [];
    this.taskCount = this.tasks.length;
  }

  createTask(text) {
    //TODO Move task length to config file or variable
    if(this.tasks.length >= 3) {
      NotificationUtility.displayNotification("Too many tasks");
    } else {
      const id = Date.now();
      this.tasks.push({
        id,
        text,
        complete: false
      });
      this.taskCount = this.taskCount +1;
      this.emit("change");
    }
  }

  completeTask(id) {
    const task = this.tasks.filter(function(task) {
      return task.id === id;
    })[0];

    task.complete = true;
    this.taskCount = this.taskCount -1;

    this.emit("change");
  }

  uncompleteTask(id) {
    const task = this.tasks.filter(function(task) {
      return task.id === id;
    })[0];

    task.complete = false;
    this.taskCount = this.taskCount +1;

    this.emit("change");
  }

  getAll() {
    return this.tasks;
  }

  getTaskCount() {
    return this.taskCount;
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
      case "UNCOMPLETE_TASK" : {
        this.uncompleteTask(action.id);
        break;
      }
    }
  }

}

const taskStore = new TaskStore;

dispatcher.register(taskStore.handleActions.bind(taskStore));

export default taskStore;
