import { Client } from "@notionhq/client";
import { GetServerSideProps } from "next";
import Head from "next/head";
import * as c from "@/lib/constants";
import * as f from "@/lib/functions";
import { Divider, ProfileCard, ReportCountCard } from "@/components";
import Image from "next/image";
import Link from "next/link";

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID ?? "";

export default function Home({ notionWorkPrograms, notionOrganizers }: any) {
  const leader = f.filterOrganizer(notionOrganizers, c.LEADER);
  const coLeader = f.filterOrganizer(notionOrganizers, c.CO_LEADER);
  const mulHead = f.filterOrganizer(notionOrganizers, c.MUL_HEAD);
  const pubHead = f.filterOrganizer(notionOrganizers, c.PUB_HEAD);
  const mulStaff = f.filterOrganizer(notionOrganizers, c.MUL_STAFF);
  const pubStaff = f.filterOrganizer(notionOrganizers, c.PUB_STAFF);

  return (
    <>
      <Head>
        <title>Infokom Himasisko</title>
        <meta
          name="description"
          content="Dinas Informasi dan Komunikasi Himpunan Mahasiswa Sistem Komputer Universitas Sriwijaya"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-6xl mx-auto">
        <header className="py-40 text-center">
          <Image
            src="/infokom.svg"
            alt="Infokom logo"
            width={60}
            height={60}
            className="mx-auto"
          />
          <p className="mt-8 text-gray-600">
            <span className="tracking-[1.2rem]">-DINAS</span>-
          </p>
          <h1 className="text-5xl font-black mt-4 text-gray-900">
            Informasi dan Komunikasi
          </h1>
          <p className="text-blue-500 font-light">
            Himpunan Mahasiswa Sistem Komputer Universitas Sriwijaya
          </p>
        </header>

        <main className="mt-20 space-y-20">
          <Divider />
          <section className="text-center space-y-20">
            <div>
              <h2 className="text-3xl text-blue-500">Pengurus Dinas</h2>
              <ul className="grid grid-cols-2 mt-8 gap-4">
                <ProfileCard
                  title="Kepala Dinas"
                  name={leader[0].properties.Name.title[0].text.content}
                  quote={leader[0].properties.Quote.rich_text[0].text.content}
                  image={leader[0].properties.Photo.files[0].file.url}
                />
                <ProfileCard
                  title="Wakil Kepala Dinas"
                  name={coLeader[0].properties.Name.title[0].text.content}
                  quote={coLeader[0].properties.Quote.rich_text[0].text.content}
                  image={coLeader[0].properties.Photo.files[0].file.url}
                />
              </ul>
              <ul className="grid grid-cols-2 mt-4 gap-4">
                <ProfileCard
                  title="Kepala Divisi Multimedia"
                  name={mulHead[0].properties.Name.title[0].text.content}
                  quote={mulHead[0].properties.Quote.rich_text[0].text.content}
                  image={mulHead[0].properties.Photo.files[0].file.url}
                />
                <ProfileCard
                  title="Kepala Divisi Publikasi"
                  name={pubHead[0].properties.Name.title[0].text.content}
                  quote={pubHead[0].properties.Quote.rich_text[0].text.content}
                  image={pubHead[0].properties.Photo.files[0].file.url}
                />
              </ul>
            </div>
            <div>
              <h2 className="text-3xl text-blue-500">Staff Multimedia</h2>
              <ul className="grid grid-flow-col mt-8 gap-4">
                {mulStaff.map((staff: any) => {
                  <ProfileCard
                    key={staff.id}
                    name={staff.properties.Name.title[0].text.content}
                    quote={staff.properties.Quote.rich_text[0].text.content}
                    image={staff.properties.Photo.files[0].file.url}
                  />;
                })}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl text-blue-500">Staff Publikasi</h2>
              <ul className="grid grid-flow-col mt-8 gap-4">
                {pubStaff.map((staff: any) => {
                  <ProfileCard
                    key={staff.id}
                    name={staff.properties.Name.title[0].text.content}
                    quote={staff.properties.Quote.rich_text[0].text.content}
                    image={staff.properties.Photo.files[0].file.url}
                  />;
                })}
              </ul>
            </div>
          </section>
          <Divider />
          <section className="grid grid-cols-2 gap-8">
            <div className="border px-6 pt-12 pb-6 relative bg-gray-100 rounded">
              <h2 className="text-3xl absolute -top-4 right-10 text-blue-500">
                Kilasan
              </h2>
              <p className="text-[10rem] absolute -top-20 left-0 text-gray-400">
                &quot;
              </p>
              <p className="max-w-3xl mx-auto tracking-wider text-lg">
                Infokom adalah dinas yang berperan dalam pembentukkan citra
                Himasisko Unsri serta memberikan informasi kepada seluruh
                mahasiswa Sistem Komputer Universitas Sriwijaya.
              </p>
            </div>
            <div className="border px-6 pt-12 pb-6 relative bg-gray-100 rounded">
              <h2 className="text-3xl absolute -top-4 right-10 text-blue-500">
                Tujuan
              </h2>
              <p className="text-[10rem] absolute -top-20 left-0 text-gray-400">
                &quot;
              </p>
              <p className="max-w-3xl mx-auto tracking-wider text-lg">
                Menjadikan media komunikasi sebagai cermin dari Himasisko Unsri
                serta wadah pencerdasan dengan menggunakan jaringan yang
                informatif dan komunikatif.
              </p>
            </div>
          </section>
          <Divider />
          <section className="text-center">
            <h2 className="text-3xl text-blue-500">
              Laporan Postingan Tahun 2023
            </h2>
            <ul className="grid grid-cols-3 mt-4 gap-6">
              <ReportCountCard
                title="Hari-Hari Besar"
                number={f.countReports(notionWorkPrograms, c.HARI_HARI_BESAR)}
              />
              <ReportCountCard
                title="SK Information"
                number={f.countReports(notionWorkPrograms, c.SK_INFORMATION)}
              />
              <ReportCountCard
                title="Tech Story"
                number={f.countReports(notionWorkPrograms, c.TECH_STORY)}
              />
              <ReportCountCard
                title="Tech Tips"
                number={f.countReports(notionWorkPrograms, c.TECH_TIPS)}
              />
              <ReportCountCard
                title="SK Berprestasi"
                number={f.countReports(notionWorkPrograms, c.SK_BERPRESTASI)}
              />
              <ReportCountCard
                title="Ultah BPH"
                number={f.countReports(notionWorkPrograms, c.ULTAH_BPH)}
              />
            </ul>
            <div className="mt-8">
              <Link
                href="/posting"
                className="bg-gray-200 py-4 px-6 inline-block rounded text-gray-700 hover:bg-gray-300"
              >
                Lihat Postingan
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
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
  const notionOrganizers = await notion.databases.query({
    database_id: "a859128af09743afa57bdbd22c7de379",
  });

  return {
    props: { notionWorkPrograms, notionOrganizers },
  };
};
