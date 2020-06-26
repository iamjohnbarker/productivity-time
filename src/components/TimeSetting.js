import React, { useState } from "react";
import { useSelector } from "react-redux";

import { addTaskText, addTaskTime } from "../store/actions/actions";

const timeIntervals = [5, 10, 15, 30, 45, 60];

export default function TimeSetting() {
 const [whatToWorkOn, setWhatToWorkOn] = useState("");

 const currentTask = useSelector((state) => state.currentTask);

 const handleAddTaskText = () => {
  if (whatToWorkOn === "") return null;

  addTaskText(whatToWorkOn);
 };

 const handleAddTaskTime = (e) => {
  addTaskTime(e.target.dataset.interval * 60);
 };

 return (
  <div className="w-full px-4 py-2">
   {currentTask === "" ? (
    <div>
     <form
      onSubmit={(e) => {
       e.preventDefault();
       handleAddTaskText(whatToWorkOn);
      }}
     >
      <input
       value={whatToWorkOn}
       onChange={(e) => setWhatToWorkOn(e.target.value)}
       name="what"
       className="w-full bg-gray-800 h-10 rounded-lg px-4 py-2 focus:border-green-400 focus:outline-none"
       type="text"
       placeholder="What are you going to work on?"
      />
     </form>
    </div>
   ) : (
    <div className="w-full">
     <div className="flex justify-between text-gray-400">
      {timeIntervals.map((interval, index) => {
       return (
        <button
         key={interval}
         className={`w-full px-3 py-2 h-10 rounded-lg bg-gray-800 text-sm focus:outline-none hover:bg-gray-700 transition duration-200 ease-in-out ${
          index === 0
           ? "mr-2"
           : index === timeIntervals.length - 1
           ? "ml-2"
           : "mx-2"
         }`}
         onClick={(e) => handleAddTaskTime(e)}
         data-interval={interval}
        >
         {interval}
        </button>
       );
      })}
     </div>{" "}
    </div>
   )}
  </div>
 );
}
