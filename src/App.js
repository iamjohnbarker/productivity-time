import React from "react";
import "./assets/main.css";

const timeIntervals = [5, 10, 15, 30, 45, 60];

function App() {
 return (
  <div
   className="bg-green-200 h-screen w-screen subpixel-antialiased font-sans"
   style={{ WebkitUserSelect: "none" }}
  >
   <header
    className="flex justify-center items-center h-16 bg-green-700"
    style={{ webkitAppRegion: "drag" }}
   >
    <h1 className="text-2xl text-white font-light">Productivity Time</h1>
   </header>

   <main className="px-10 py-6">
    <label htmlFor="what">What are you going to work on?</label>
    <input
     name="what"
     className="mt-4 w-full bg-green-100 rounded-lg border-green-300 border-2 px-4 py-2 focus:border-green-400 focus:outline-none"
     type="text"
     placeholder="This, that or the other..."
    />

    <h2 className="mt-6">For how long?</h2>
    <div className="mt-4 flex justify-between text-green-800">
     {timeIntervals.map((interval) => {
      return (
       <button className="px-2 py-2 rounded bg-green-300">
        {interval} mins
       </button>
      );
     })}
    </div>
   </main>
  </div>
 );
}

export default App;
