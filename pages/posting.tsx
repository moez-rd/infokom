import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { GetServerSideProps } from "next";
import Head from "next/head";
import * as c from "@/lib/constants";
import * as f from "@/lib/functions";
import { ReportCountCard, Navbar, Divider } from "@/components";

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID ?? "";

export default function Posting({ notionWorkPrograms }: any) {
  return (
    <>
      <Head>
        <title>Infokom | Posting</title>
        <meta
          name="description"
          content="Dinas Informasi dan Komunikasi Himpunan Mahasiswa Sistem Komputer Universitas Sriwijaya"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-2">
        <header className="mx-auto text-center py-20 sm:py-40">
          <h1 className="text-5xl font-black mt-4 text-blue-500">Posting</h1>
        </header>
        <Divider />
        <main className="m-10 mx-auto max-w-2xl">
          <ul className="mt-10 space-y-4">
            {notionWorkPrograms.results.map((result: any) => (
              <li key={result.id}>
                <div className="border p-4 rounded">
                  <div className="flex space-x-1 items-center">
                    <div className="bg-gray-600 w-2 h-1"></div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                      {result.properties.Category.select.name}
                    </p>
                  </div>
                  <h2 className="text-lg font-bold text-blue-500">
                    {result.properties.Name.title[0]?.text.content ? (
                      result.properties.Name.title[0]?.text.content
                    ) : (
                      <span className="text-gray-500">Tanpa Judul</span>
                    )}
                  </h2>
                  <div className="flex space-x-2 text-gray-500 text-sm">
                    <div>
                      <p>
                        <span className="font-bold">Desain</span>{" "}
                        {result.properties.Designer.people[0].name}
                      </p>
                    </div>
                    <div>
                      <p>
                        <span className="font-bold">Publikasi</span>{" "}
                        {result.properties.Publicationer.people[0].name}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2 text-gray-700 text-sm">
                    <div className="border px-2 rounded">
                      <p>{result.properties.Date.date.start}</p>
                    </div>
                    <div
                      className={`px-2 rounded ${
                        result.properties.Status.status.name == c.PUBLISHED
                          ? "bg-green-300 text-green-700"
                          : "bg-blue-300 text-blue-700"
                      }`}
                    >
                      <p>{result.properties.Status.status.name}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const notionWorkPrograms = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "Date",
        direction: "ascending",
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
    props: { notionWorkPrograms },
  };
};
