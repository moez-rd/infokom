import Link from "next/link";
import { FC } from "react";

interface Props {
  name: string;
  href: string;
}

const NavbarLink: FC<Props> = ({ name, href }) => {
  return (
    <li className="flex items-center space-x-1 hover:-translate-y-0.5">
      <div className="h-1 w-2 bg-gray-600"></div>
      <Link
        href={href}
        className="text-xs font-light uppercase tracking-widest text-gray-600 sm:text-sm "
      >
        {name}
      </Link>
    </li>
  );
};

export default NavbarLink;
