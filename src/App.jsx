/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Feb 16 2022 15:11:51 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import Milestone from "./Milestone/Milestone";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <div className="w-full max-w-sm m-auto flex flex-col">
        {[...Array(5)].map((_, _idx) => (
          <Milestone key={_idx} data={{ id: _idx }} />
        ))}
      </div>
    </div>
  );
};

export default App;
