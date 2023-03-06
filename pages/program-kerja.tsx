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
        <header className="mx-auto text-center py-20 sm:py-40">
          <h1 className="text-5xl font-black mt-4 text-blue-500">
            Program Kerja
          </h1>
        </header>
        <Divider />
        <main className="m-10 mx-auto max-w-2xl">
          <ul className="mt-10 space-y-16">
            {notionWorkPrograms.results.map((result: any) => (
              <li key={result.id}>
                <div className="border px-6 pt-12 pb-6 relative bg-gray-100 rounded">
                  <h2 className="text-3xl absolute -top-4 text-right w-60 right-10 text-blue-500">
                    {result.properties.Name.title[0]?.text.content ? (
                      result.properties.Name.title[0]?.text.content
                    ) : (
                      <span className="text-gray-500">Tanpa Judul</span>
                    )}
                  </h2>
                  <p className="text-[10rem] absolute -top-20 left-0 text-gray-400">
                    &quot;
                  </p>
                  <div className="flex space-x-1 text-gray-500 text-sm mt-10">
                    <p className="px-1 rounded bg-orange-300 text-orange-700">
                      PJ
                    </p>
                    <p>
                      {
                        result.properties["Penanggung Jawab"].rich_text[0].text
                          .content
                      }
                    </p>
                  </div>
                  <div className="flex space-x-1 mt-1 text-gray-500 text-sm">
                    <p className="px-1 rounded bg-orange-300 text-orange-700">
                      WPJ
                    </p>
                    <p>
                      {
                        result.properties["Wakil Penanggung Jawab"].rich_text[0]
                          .text.content
                      }
                    </p>
                  </div>
                  <p className="text-gray-700 mt-8">
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
