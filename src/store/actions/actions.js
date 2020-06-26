import store from "../main-store";

const ADD_TASK_TEXT = "ADD_TASK_TEXT";
const ADD_TASK_TIME = "ADD_TASK_TIME";
const PAUSE_TASK = "PAUSE_TASK";
const STOP_TASK = "STOP_TASK";
const CHANGE_TIME = "CHANGE_TIME";

export function addTaskText(text) {
 const action = {
  type: ADD_TASK_TEXT,
  text,
 };
 store.dispatch(action);
}

export function addTaskTime(time) {
 const action = {
  type: ADD_TASK_TIME,
  time,
 };
 store.dispatch(action);
}

export function pauseTask() {
 const action = {
  type: PAUSE_TASK,
 };
 store.dispatch(action);
}

export function stopTask() {
 const action = {
  type: STOP_TASK,
 };
 store.dispatch(action);
}

export function changeTime(amount) {
 const action = {
  type: CHANGE_TIME,
  amount,
 };
 store.dispatch(action);
}
