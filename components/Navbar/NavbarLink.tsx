import Link from "next/link";
import { FC } from "react";

interface Props {
  name: string;
  href: string;
}

const NavbarLink: FC<Props> = ({ name, href }) => {
  return (
    <li className="flex space-x-1 items-center hover:-translate-y-0.5">
      <div className="bg-gray-600 w-2 h-1"></div>
      <Link
        href={href}
        className="tracking-widest text-sm uppercase text-gray-600 font-light "
      >
        {name}
      </Link>
    </li>
  );
};

export default NavbarLink;
