import React from "react";

type SectionProps = {
  className?: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ className, children }) => {
  return (
    <section className={`mx-3 sm:mx-auto ${className}`}>{children}</section>
  );
};
export default Section;
