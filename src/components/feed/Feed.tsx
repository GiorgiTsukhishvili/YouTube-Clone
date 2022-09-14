import React from "react";
import { Sidebar, Videos } from "./";

const Feed = () => {
  return (
    <div className="flex flex-row md:flex-col">
      <div className="h-[92vh] md:h-auto border-r-[1px] border-[#3d3d3d] px-2 md:px-0">
        <Sidebar />
        <h1 className="copyright mt-1.5 text-white">Copyright 2022 YouTube</h1>
      </div>

      <div className="p-2 overflow-y-auto h-[90vh] ">
        <h1 className=" font-bold mb-2 text-white text-[28px]">
          New <span className="text-[#F31503]">Videos</span>
        </h1>

        <Videos />
      </div>
    </div>
  );
};

export default Feed;
