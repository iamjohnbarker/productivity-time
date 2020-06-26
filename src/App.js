import React from "react";
import "./assets/main.css";
import { useSelector } from "react-redux";

import TimeSetting from "./components/TimeSetting";
import TimeRunning from "./components/TimeRunning";

function App() {
 const isRunning = useSelector((state) => state.taskRunning);

 return (
  <div
   className="bg-gray-900 h-screen w-screen subpixel-antialiased font-sans text-gray-400 overflow-hidden flex justify-center items-center"
   style={{ WebkitUserSelect: "none", WebkitAppRegion: "drag" }}
  >
   {/* <header
    className="flex justify-center items-center h-6 bg-gray-900"
    style={{ WebkitAppRegion: "drag" }}
   >
    <h1 className="text-sm text-white font-light">Productivity Time</h1>
   </header> */}

   {!isRunning ? <TimeSetting /> : <TimeRunning />}
  </div>
 );
}

export default App;
