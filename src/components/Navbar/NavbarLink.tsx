import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { UrlObject } from "url";
declare type Url = string | UrlObject;

type LinkProps = {
  href: Url;
  name: string;
  nameSm: string;
};

const NavbarLink: React.FC<LinkProps> = ({ href, name, nameSm }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`rounded px-1 text-sm font-medium uppercase transition sm:text-base ${
        router.pathname === href
          ? router.pathname === "/"
            ? "text-primary-300"
            : "text-primary-500"
          : router.pathname === "/"
          ? "text-neutral-100 hover:bg-white/10"
          : "hover:bg-primary-100 hover:text-primary-500"
      }`}
    >
      <span className="hidden sm:inline-block">{name}</span>
      <span className="sm:hidden">{nameSm}</span>
    </Link>
  );
};
export default NavbarLink;
