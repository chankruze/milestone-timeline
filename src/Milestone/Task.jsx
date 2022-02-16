/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Feb 16 2022 15:19:02 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

const Task = ({ id, isComplete }) => {
  return (
    <div
      className={`p-6 flex-1 flex items-center text-white
      rounded-lg ${isComplete ? "bg-green-600" : "bg-slate-600"}`}
    >
      <h1 className="capitalize">Task #{id}</h1>
    </div>
  );
};

export default Task;
