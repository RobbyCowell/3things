import dispatcher from "../dispatcher";

export function createTask(task) {
  dispatcher.dispatch({
    type: "CREATE_TASK",
    task,
  });
}
