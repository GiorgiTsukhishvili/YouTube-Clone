import React from "react";
import Sidebar from "./Sidebar";

const Feed = () => {
  return (
    <div className="flex flex-row md:flex-col">
      <div className="h-[92vh] md:h-auto border-r-[1px] border-[#3d3d3d] px-2 md:px-0">
        <Sidebar />
        <h1 className="copyright mt-1.5 text-white">Copyright 2022 YouTube</h1>
      </div>
    </div>
  );
};

export default Feed;
