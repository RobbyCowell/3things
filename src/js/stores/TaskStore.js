import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import * as NotificationUtility from "../utilities/NotificationUtility";

class TaskStore extends EventEmitter {
  constructor() {
    super();
    //TODO Initiliaze these properties as empty when building is complete
    this.tasks = [
      {
        id: 1,
        text: "This is a completed task",
        complete: true
      }
    ];
    this.taskCount = 1; //tasks.length
  }

  createTask(text) {
    //TODO Generate sequential IDs
    //TODO Move task length to config file or variable
    if(this.tasks.length >= 3) {
      NotificationUtility.addNotification("Too many tasks");
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

    this.emit("change");
  }

  //TODO Refactor the get methods into one
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
    }
  }

}

const taskStore = new TaskStore;

dispatcher.register(taskStore.handleActions.bind(taskStore));

export default taskStore;
