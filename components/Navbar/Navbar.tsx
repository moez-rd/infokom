import Link from "next/link";
import { FC } from "react";
import NavbarLink from "./NavbarLink";

const Navbar: FC = () => {
  return (
    <nav className="border-b py-6 md:px-40">
      <ul className="flex justify-center space-x-10">
        <NavbarLink name="Home" href="/" />
        <NavbarLink name="Program Kerja" href="/program-kerja" />
        <NavbarLink name="Posting" href="posting" />
      </ul>
    </nav>
  );
};

export default Navbar;
