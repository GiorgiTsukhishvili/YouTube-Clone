import React from "react";

import Logo from "../../assets/logo.png";
import SearchBar from "./SearchBar";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center p-2 sticky bg-black justify-between top-0">
      <Link
        to="/"
        className="flex items-center  text-white font-semibold text-[20px] "
      >
        <img src={Logo} alt="logo" className="h-[25px] " />
        YouTube
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
