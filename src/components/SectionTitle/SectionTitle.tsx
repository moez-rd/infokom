import React, { Fragment } from "react";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "center",
}) => {
  return (
    <Fragment>
      <h2
        className={`text-2xl sm:text-4xl font-bold ${!subtitle && "mb-4 sm:mb-10"} ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mb-4 sm:mb-10 text-neutral-500 ${
            align === "center" ? "text-center" : "text-left"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Fragment>
  );
};
export default SectionTitle;
