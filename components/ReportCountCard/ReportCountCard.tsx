import { FC } from "react";

interface Props {
  title: string;
  number: number;
}

const ReportCountCard: FC<Props> = ({ title, number }) => {
  return (
    <li className="border px-2 py-4 text-center">
      <p className="text-5xl text-gray-500">{number}</p>
      <h3 className="text-sm font-medium">{title}</h3>
    </li>
  );
};

export default ReportCountCard;
