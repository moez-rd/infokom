import React from "react";

type SocialMediaLinkProps = {
  href?: string;
  children: React.ReactNode;
};

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  href,
  children,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 transition hover:bg-primary-200 sm:h-10 sm:w-10"
    >
      {children}
    </a>
  );
};
export default SocialMediaLink;
