import { PageHeader, Section, VerticalLine, WorkTaskCard } from "@/components";
import CONFIG from "@/config/config";
import * as c from "@/config/constants";
import { notion } from "@/notion/clientInit";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Fragment } from "react";

export default function Posting({ notionWorkTasks }: any) {
  function getFormattedDate(date: any) {
    return new Date(date);
  }
  return (
    <Fragment>
      <Head>
        <title>{CONFIG.title} | Posting</title>
      </Head>
      <PageHeader title="Posting" />
      <main className="space-y-10 pb-40">
        <VerticalLine />
        <Section className="max-w-2xl space-y-4">
          {notionWorkTasks.results.map((result: any) => (
            <WorkTaskCard key={result.id} workTask={result} />
          ))}
        </Section>
      </main>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const notionWorkTasks = await notion.databases.query({
    database_id: CONFIG.notionWorkTaskDatabaseId,
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
    filter: {
      or: [
        {
          property: "Status",
          status: {
            equals: c.PUBLISHED,
          },
        },
        {
          property: "Status",
          status: {
            equals: c.IN_PROGRESS,
          },
        },
      ],
    },
  });

  return {
    props: { notionWorkTasks },
  };
};
