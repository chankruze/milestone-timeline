/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Feb 16 2022 15:11:51 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useState } from "react";
import Milestone from "./Milestone/Milestone";

const App = () => {
  const [lessonsCountInput, setLessonsCountInput] = useState(7);
  const [completionCountInput, setCompletionCountInput] = useState(2);

  const [lessonsCount, setLessonsCount] = useState(lessonsCountInput);
  const [completionCount, setCompletionCount] = useState(completionCountInput);

  const validateLessonsCount = (count) => {
    if (count >= 0 && count <= 21) return true;
  };

  const validateCompletedCount = (count) => {
    if (count >= 0 && count <= lessonsCountInput) return true;
  };

  const onUpdate = () => {
    if (validateLessonsCount(lessonsCountInput)) {
      setLessonsCount(lessonsCountInput);
    }

    if (validateCompletedCount(completionCountInput)) {
      setCompletionCount(completionCountInput);
    }
  };

  return (
    <div
      className="h-screen flex flex-col bg-gray-800
    overflow-hidden select-none"
    >
      <div
        className="w-full p-2 bg-slate-700 
      flex justify-start sm:justify-center flex-wrap gap-4"
      >
        <div className="flex-1 sm:flex-none flex justify-between sm:justify-start items-center">
          <label htmlFor="lessonsCount" className="text-white p-2">
            Lessons count
          </label>
          <input
            id="lessonsCount"
            type="number"
            placeholder="No of lessonsCount (max: 21)"
            className="border-0 outline-none p-3 rounded-lg"
            onChange={(e) => setLessonsCountInput(parseInt(e.target.value))}
            value={lessonsCountInput}
          />
        </div>
        <div className="flex-1 sm:flex-none flex justify-between sm:justify-start items-center">
          <label htmlFor="completionCount" className="text-white p-2">
            Completion count
          </label>
          <input
            id="completionCount"
            type="number"
            placeholder={`Completed (max: ${lessonsCountInput})`}
            className="border-0 outline-none p-3 rounded-lg"
            onChange={(e) => setCompletionCountInput(parseInt(e.target.value))}
            value={completionCountInput}
          />
        </div>
        <div className="flex-1 sm:flex-none flex items-center">
          <button
            onClick={onUpdate}
            className="bg-green-600 text-white uppercase 
          rounded-lg px-4 py-3 cursor-pointer w-full sm:w-auto"
          >
            update
          </button>
        </div>
      </div>
      <div className="overflow-y-auto p-4">
        <div className="w-full max-w-sm m-auto flex flex-col">
          {Array.from(Array(lessonsCount)).map((_, _idx) => (
            <Milestone
              key={_idx}
              id={_idx + 1}
              isComplete={completionCount > _idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
