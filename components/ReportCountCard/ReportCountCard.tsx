import { FC } from "react";

interface Props {
  title: string;
  number: number;
}

const ReportCountCard: FC<Props> = ({ title, number }) => {
  return (
    <li className="text-center border px-2 py-4">
      <p className="text-5xl text-gray-500">{number}</p>
      <h3 className="font-medium text-sm">{title}</h3>
    </li>
  );
};

export default ReportCountCard;
