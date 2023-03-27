import { countReports } from "@/config/functions";
import React from "react";
import Card from "../Card/Card";
import * as c from "@/config/constants";

type ReportCardProps = {
  name: string;
  count: number;
};

const ReportCard: React.FC<ReportCardProps> = ({ name, count }) => {
  return (
    <Card className="py-8 px-4 text-center">
      <p className="text-4xl font-semibold">{count}</p>
      <h3 className="text-neutral-500">{name}</h3>
    </Card>
  );
};
export default ReportCard;
