import React from "react";

type ParagraphLinkProps = {
  href?: string;
  children: React.ReactNode;
};

const ParagraphLink: React.FC<ParagraphLinkProps> = ({ href, children }) => {
  return (
    <a
      className="text-primary-500 underline hover:text-primary-600"
      target="_blank"
      href={href}
    >
      {children}
    </a>
  );
};
export default ParagraphLink;
