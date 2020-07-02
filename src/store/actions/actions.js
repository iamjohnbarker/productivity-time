import store from "../main-store";
import { useSelector } from "react-redux";
const { ipcRenderer } = window.require("electron");

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
 ipcRenderer.send("timer-status-change", "paused");

 const state = store.getState();

 if (state.taskRunning === false) {
  ipcRenderer.send("timer-status-change", "light");
 }

 return store.dispatch(action);
}

export function stopTask() {
 const action = {
  type: STOP_TASK,
 };
 ipcRenderer.send("timer-status-change", "light");

 return store.dispatch(action);
}

export function changeTime(amount) {
 const action = {
  type: CHANGE_TIME,
  amount,
 };

 const state = store.getState();

 if (state.currentTimeLeft < 61 && state.currentTimeLeft > 0) {
  ipcRenderer.send("timer-status-change", "green");
 } else if (state.currentTimeLeft <= 0) {
  ipcRenderer.send("timer-status-change", "red");
 }

 return store.dispatch(action);
}
