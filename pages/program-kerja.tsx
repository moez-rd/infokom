import { Divider } from "@/components";
import { Client } from "@notionhq/client";
import { GetServerSideProps } from "next";
import Head from "next/head";

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = "d346ca4c1e9b4a9493c38e2b983508d2";

export default function ProgramKerja({ notionWorkPrograms }: any) {
  return (
    <>
      <Head>
        <title>Infokom | Program Kerja</title>
        <meta
          name="description"
          content="Dinas Informasi dan Komunikasi Himpunan Mahasiswa Sistem Komputer Universitas Sriwijaya"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-2 sm:mx-4 xl:mx-auto">
        <header className="mx-auto py-20 text-center sm:py-40">
          <h1 className="mt-4 text-5xl font-black text-blue-500">
            Program Kerja
          </h1>
        </header>
        <Divider />
        <main className="m-10 mx-auto max-w-2xl">
          <ul className="mt-10 space-y-16">
            {notionWorkPrograms.results.map((result: any) => (
              <li key={result.id}>
                <div className="relative rounded border bg-gray-100 px-6 pt-12 pb-6">
                  <h2 className="absolute -top-4 right-10 w-60 text-right text-3xl text-blue-500">
                    {result.properties.Name.title[0]?.text.content ? (
                      result.properties.Name.title[0]?.text.content
                    ) : (
                      <span className="text-gray-500">Tanpa Judul</span>
                    )}
                  </h2>
                  <p className="absolute -top-20 left-0 text-[10rem] text-gray-400">
                    &quot;
                  </p>
                  <div className="mt-10 flex space-x-1 text-sm text-gray-500">
                    <p className="rounded bg-orange-300 px-1 text-orange-700">
                      PJ
                    </p>
                    <p>
                      {
                        result.properties["Penanggung Jawab"].rich_text[0].text
                          .content
                      }
                    </p>
                  </div>
                  <div className="mt-1 flex space-x-1 text-sm text-gray-500">
                    <p className="rounded bg-orange-300 px-1 text-orange-700">
                      WPJ
                    </p>
                    <p>
                      {
                        result.properties["Wakil Penanggung Jawab"].rich_text[0]
                          .text.content
                      }
                    </p>
                  </div>
                  <p className="mt-8 text-gray-700">
                    {result.properties.Deskripsi.rich_text[0].text.content}
                  </p>
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
  });

  return {
    props: { notionWorkPrograms },
  };
};
