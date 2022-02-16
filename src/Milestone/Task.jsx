/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Feb 16 2022 15:19:02 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

const Task = ({ id }) => {
  return (
    <div
      className="flex-1 flex items-center 
      rounded-lg bg-white p-6"
    >
      <h1 className="capitalize">Task #{id}</h1>
    </div>
  );
};

export default Task;
