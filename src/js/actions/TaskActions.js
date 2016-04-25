import dispatcher from "../dispatcher";

export function createTask(text) {
  dispatcher.dispatch({
    type: "CREATE_TASK",
    text,
  });
}

export function completeTask(id) {
  dispatcher.dispatch({
    type: "COMPLETE_TASK",
    id,
  });
}

export function uncompleteTask(id) {
  dispatcher.dispatch({
    type: "UNCOMPLETE_TASK",
    id
  });
}
