import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <form
      className="bg-white flex justify-center items-center rounded-[20px] border-[1px] border-[#e3e3e3] pl-2 mt-2 shadow-none sm:mr-5"
      onSubmit={() => {}}
    >
      <input
        type="text"
        className="search-bar"
        value=""
        placeholder="Search"
        onChange={() => {}}
      />

      <button type="submit" className="p-[10px] text-[20px] m-0 text-red-500">
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default SearchBar;
