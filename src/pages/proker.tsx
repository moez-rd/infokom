import { PageHeader, Section, VerticalLine, WorkProgramCard } from "@/components";
import CONFIG from "@/config/config";
import { notion } from "@/notion/clientInit";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Fragment } from "react";

export default function Proker({ notionWorkPrograms }: any) {
  return (
    <Fragment>
      <Head>
        <title>{CONFIG.title} | Program Kerja</title>
      </Head>
      <PageHeader title="Program Kerja" />
      <main className="space-y-10 pb-40">
        <VerticalLine />
        <Section className="max-w-2xl space-y-4">
          {notionWorkPrograms.results.map((result: any) => (
            <WorkProgramCard key={result.id} workProgram={result} />
          ))}
        </Section>
      </main>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const notionWorkPrograms = await notion.databases.query({
    database_id: CONFIG.notionWorkProgramsDatabaseId,
  });

  return {
    props: { notionWorkPrograms },
  };
};
