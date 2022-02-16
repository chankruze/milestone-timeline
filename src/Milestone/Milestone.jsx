/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Feb 16 2022 15:25:26 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import CheckPoint from "./CheckPoint";
import Task from "./Task";
import VerticalLine from "./VerticalLine";

const Milestone = ({ data }) => {
  return (
    <div className="h-24 flex items-center gap-4">
      <div className="h-full relative flex flex-col items-center">
        <VerticalLine />
        <CheckPoint />
      </div>
      <Task id={data.id} />
    </div>
  );
};

export default Milestone;
