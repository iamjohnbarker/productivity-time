const initialState = {
 currentTask: "",
 currentTimeLeft: 0,
 taskRunning: false,
 taskPaused: false,
};

export default function taskReducer(state = initialState, action) {
 switch (action.type) {
  case "ADD_TASK_TEXT":
   return Object.assign({}, state, {
    currentTask: action.text,
   });

  case "ADD_TASK_TIME":
   return Object.assign({}, state, {
    currentTimeLeft: action.time,
    taskRunning: true,
   });

  case "PAUSE_TASK":
   return Object.assign({}, state, {
    taskPaused: !state.taskPaused,
   });

  case "STOP_TASK":
   return Object.assign({}, state, {
    currentTask: "",
    currentTimeLeft: 0,
    taskRunning: false,
    taskPaused: false,
   });

  case "CHANGE_TIME":
   return Object.assign({}, state, {
    currentTimeLeft: state.currentTimeLeft - action.amount,
   });

  default:
   return state;
 }
}
