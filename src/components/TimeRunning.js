import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { pauseTask, stopTask, changeTime } from "../store/actions/actions";

export default function TimeRunning() {
 const currentTask = useSelector((state) => state.currentTask);
 const currentTimeLeft = useSelector((state) => state.currentTimeLeft);
 const taskRunning = useSelector((state) => state.taskRunning);
 const taskPaused = useSelector((state) => state.taskPaused);

 useEffect(() => {
  const interval = setInterval(() => {
   if (taskRunning && !taskPaused) {
    changeTime(1);
   }
  }, 1000);
  return () => {
   clearInterval(interval);
  };
 }, [taskRunning, taskPaused]);

 return (
  <div
   className={`w-full px-4 py-2 flex justify-between items-center min-h-full transition duration-200 ease-in-out ${
    currentTimeLeft < 0
     ? "bg-red-900"
     : currentTimeLeft > 60
     ? "bg-gray-900"
     : "bg-green-900"
   }`}
  >
   <span className="text-gray-100 text-xl">
    {currentTimeLeft} - {currentTask || "Working hard or hardly working?"}
   </span>
   <div>
    <button
     className={`w-10 h-10 inline-block hover:text-gray-400 transition duration-200 ease-in-out focus:outline-none 
     ${
      taskPaused
       ? "text-gray-400"
       : currentTimeLeft < 0
       ? "text-red-800"
       : currentTimeLeft > 60
       ? "text-gray-800"
       : "text-green-800"
     }
     `}
     onClick={() => pauseTask()}
    >
     <svg fill="currentColor" viewBox="0 0 20 20">
      <path
       fillRule="evenodd"
       d={
        taskPaused
         ? "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
         : "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
       }
       clipRule="evenodd"
      ></path>
     </svg>{" "}
    </button>

    <button
     className={`ml-4 w-10 h-10 inline-block hover:text-gray-400 transition duration-200 ease-in-out focus:outline-none ${
      currentTimeLeft < 0
       ? "text-red-800"
       : currentTimeLeft > 60
       ? "text-gray-800"
       : "text-green-800"
     }`}
     onClick={() => stopTask()}
    >
     <svg fill="currentColor" viewBox="0 0 20 20">
      <path
       fillRule="evenodd"
       d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
       clipRule="evenodd"
      ></path>
     </svg>{" "}
    </button>
   </div>
  </div>
 );
}

{
 /* <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg> */
}
