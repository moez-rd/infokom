import { FC } from "react";

const Divider: FC = () => {
  return (
    <div className="flex justify-center space-x-4">
      <div className="h-4 w-4 bg-blue-500"></div>
      <div className="h-4 w-4 bg-gray-700"></div>
      <div className="h-4 w-4 bg-orange-500"></div>
    </div>
  );
};

export default Divider;
