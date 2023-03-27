import React from "react";
import Card from "../Card/Card";
import * as c from "@/config/constants";

type PostCardProps = {
  workTask: any;
};

const PostCard: React.FC<PostCardProps> = ({ workTask }) => {
  return (
    <Card key={workTask.id} className="py-3 sm:py-4">
      <p className="text-xs uppercase tracking-widest text-primary-600 sm:text-sm">
        {workTask.properties.Category.select.name}
      </p>
      <h2 className="text-lg font-bold leading-6 sm:text-xl">
        {workTask.properties.Name.title[0]?.text.content ? (
          workTask.properties.Name.title[0]?.text.content
        ) : (
          <span className="text-neutral-500">Tanpa Judul</span>
        )}
      </h2>
      <div className="flex items-center space-x-3 text-sm text-neutral-500 sm:text-base">
        <p className="flex items-center space-x-1">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-200">
            <svg
              className="w-3 rounded-full fill-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z" />
            </svg>
          </span>
          <span>{workTask.properties.Designer.people[0].name}</span>
        </p>
        <p className="flex items-center space-x-1">
          <span className="flex h-5 w-5  items-center justify-center rounded-full bg-neutral-200">
            <svg
              className="w-3 fill-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
            </svg>
          </span>
          <span>{workTask.properties.Publicationer.people[0].name}</span>
        </p>
      </div>
      <div className="mt-1 flex space-x-1">
        <p className="rounded-full border px-2 text-sm font-medium">
          {new Date(workTask.properties.Date.date.start).toLocaleDateString(
            "id-ID",
            {
              day: "numeric",
              month: "short",
              year: "numeric",
            }
          )}
        </p>
        <p
          className={`rounded-full px-2 text-sm font-medium ${
            workTask.properties.Status.status.name == c.PUBLISHED
              ? "bg-green-300 text-green-700"
              : "bg-blue-300 text-blue-700"
          }`}
        >
          {workTask.properties.Status.status.name}
        </p>
      </div>
    </Card>
  );
};
export default PostCard;
