import React from "react";
import { NAVBAR_LINK } from "../static";
import logo from "../assets/logo.png";
import logoSg from "../assets/logo_sg.png";

const Header = () => {
  const navbar_link = NAVBAR_LINK.map((link) => (
    <li key={link.id}>
      <a
        href="# "
        className="text-xl font-serif text-slate-950 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ."
      >
        <span>{link.name}</span>
      </a>
    </li>
  ));
  return (
    <div className="h-24 mb-20">
      <div className="h-[100%] container max-w[1280px] mx-auto flex justify-between items-center">
        <div className="relative">
          <img
            className="max-w-[100%]  bottom-1  absolute translate-x-[20%]"
            src={logoSg}
            alt="logo"
          />
          <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar flex gap-10">{navbar_link}</ul>
      </div>
    </div>
  );
};

export default Header;
