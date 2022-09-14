import React from "react";
import { v4 } from "uuid";
import { SidebarProps } from "../../interfaces/sideBarInterface";

import { categories } from "../../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }: SidebarProps) => {
  return (
    <div className="flex flex-col w-[180px] md:w-auto md:flex-row overflow-y-auto h-[95%] md:h-auto">
      {categories.map((category) => (
        <button
          key={v4()}
          className={`text-white category-btn  ${
            category.name === selectedCategory ? "!bg-[#FC1503]" : ""
          } `}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span
            className={`text-[20px] mr-[15px] ${
              category.name !== selectedCategory
                ? "text-[#FC1503]"
                : "text-white"
            }`}
          >
            {<category.icon />}
          </span>
          <span className="md:w-[80px]">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
