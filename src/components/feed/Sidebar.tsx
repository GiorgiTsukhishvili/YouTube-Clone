import React from "react";

import { categories } from "../../utils/constants";

const Sidebar = () => {
  return (
    <div className="flex flex-col md:flex-row overflow-y-auto h-[95%] md:h-auto">
      {categories.map((category) => (
        <button>
          <span className="text-white">{<category.icon />}</span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
