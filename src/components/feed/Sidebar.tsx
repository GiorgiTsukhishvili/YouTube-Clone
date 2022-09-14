import React from "react";
import { v4 } from "uuid";

import { categories } from "../../utils/constants";

const selected = "New";

const Sidebar = () => {
  return (
    <div className="flex flex-col md:flex-row overflow-y-auto h-[95%] md:h-auto">
      {categories.map((category) => (
        <button
          key={v4()}
          className={`text-white category-btn ${
            category.name === selected ? "!bg-[#FC1503]" : ""
          } `}
        >
          <span
            className={`text-[20px] mr-[15px] ${
              category.name !== selected ? "text-[#FC1503]" : "text-white"
            }`}
          >
            {<category.icon />}
          </span>
          <span className="">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
