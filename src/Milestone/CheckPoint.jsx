/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Feb 16 2022 15:30:56 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

const CheckPoint = ({ color = "bg-slate-400" }) => {
  return <div className={`absolute top-0 bottom-0 m-auto h-4 w-4 rounded-full ${color}`}></div>;
};

export default CheckPoint;
