import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchTerm) navigate(`/search/${searchTerm}`);

    setSearchTerm("");
  };

  return (
    <form
      className="bg-white flex justify-center items-center rounded-[20px] border-[1px] border-[#e3e3e3] pl-2 mt-2 shadow-none sm:mr-5"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        className="search-bar"
        value={searchTerm}
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button type="submit" className="p-[10px] text-[20px] m-0 text-red-500">
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default SearchBar;
