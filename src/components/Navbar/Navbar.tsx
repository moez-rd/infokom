import React from "react";
import NavbarLink from "./NavbarLink";

const Navbar: React.FC = () => {
  return (
    <nav className="absolute flex h-14 w-full items-center justify-center">
      <ul className="flex space-x-4 sm:space-x-8">
        <NavbarLink name="Home" nameSm="Home" href="/" />
        <NavbarLink name="Program Kerja" nameSm="Proker" href="/proker" />
        <NavbarLink name="Posting" nameSm="Posting" href="/posting" />
        <NavbarLink name="Media Partner" nameSm="Medpart" href="/medpart" />
      </ul>
    </nav>
  );
};

export default Navbar;
