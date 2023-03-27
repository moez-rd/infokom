import React from "react";

type PageHeaderProps = {
  title: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <header className="pt-14">
      <div className="flex items-center justify-center pt-28 pb-14">
        <h1 className="inline-block h-20 bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-center text-4xl font-bold text-transparent sm:text-5xl">
          {title}
        </h1>
      </div>
    </header>
  );
};
export default PageHeader;
