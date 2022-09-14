import React from "react";

import Logo from "../../assets/logo.png";
import SearchBar from "./SearchBar";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center p-5 sticky bg-black justify-between top-0">
      <Link
        to="/"
        className="flex items-center  text-white font-semibold text-[30px] md:text-[20px] "
      >
        <img src={Logo} alt="logo" className="h-[35px] md:h-[25px] " />
        YouTube
      </Link>
      <SearchBar />
      <div></div>
    </div>
  );
};

export default Navbar;
