import { FC } from "react";

const Divider: FC = () => {
  return (
    <div className="flex justify-center space-x-4">
      <div className="bg-blue-500 w-4 h-4"></div>
      <div className="bg-gray-700 w-4 h-4"></div>
      <div className="bg-orange-500 w-4 h-4"></div>
    </div>
  );
};

export default Divider;
