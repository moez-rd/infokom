import React from "react";
import Card from "../Card/Card";
import SectionTitle from "../SectionTitle/SectionTitle";

type WorkProgramCardProps = {
  workProgram: any;
};

const WorkProgramCard: React.FC<WorkProgramCardProps> = ({ workProgram }) => {
  return (
    <Card key={workProgram.id} className="px-8">
      <SectionTitle
        align="left"
        title={workProgram.properties.Name.title[0]?.text.content}
      />
      <div className="space-y-1">
        <p>
          <span className="inline-block rounded bg-primary-300 px-1 font-bold text-primary-700">
            PJ
          </span>
          <span className="ml-2 inline-block font-medium">
            {
              workProgram.properties["Penanggung Jawab"].rich_text[0].text
                .content
            }
          </span>
        </p>
        <p>
          <span className="inline-block rounded bg-primary-300 px-1 font-bold text-primary-700">
            WPJ
          </span>
          <span className="ml-2 inline-block font-medium">
            {
              workProgram.properties["Wakil Penanggung Jawab"].rich_text[0].text
                .content
            }
          </span>
        </p>
      </div>
      <div className="mt-4">
        <p className="text-neutral-500">
          {workProgram.properties.Deskripsi.rich_text[0].text.content}
        </p>
      </div>
    </Card>
  );
};
export default WorkProgramCard;
