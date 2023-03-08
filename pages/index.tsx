import { Client } from "@notionhq/client";
import { GetServerSideProps } from "next";
import Head from "next/head";
import * as c from "@/lib/constants";
import * as f from "@/lib/functions";
import { Divider, ProfileCard, ReportCountCard } from "@/components";
import Link from "next/link";
import { particles } from "@/lib/particles";
import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Image from "next/image";

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID ?? "";

export default function Home({ notionWorkTasks, notionOrganizers }: any) {
  const leader = f.filterOrganizer(notionOrganizers, c.LEADER);
  const coLeader = f.filterOrganizer(notionOrganizers, c.CO_LEADER);
  const mulHead = f.filterOrganizer(notionOrganizers, c.MUL_HEAD);
  const pubHead = f.filterOrganizer(notionOrganizers, c.PUB_HEAD);
  const mulStaff = f.filterOrganizer(notionOrganizers, c.MUL_STAFF);
  const pubStaff = f.filterOrganizer(notionOrganizers, c.PUB_STAFF);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

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
      <Particles
        id="tsparticles"
        className="absolute -z-10"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particles}
      />
      <div className="relative -z-20">
        <header className="bg-blue-500 py-40 px-4 text-center">
          <Image
            alt=""
            src={"/planet.gif"}
            width={400}
            height={400}
            className="mx-auto w-32 -rotate-12 mix-blend-multiply md:w-60	"
          />
          {/* <svg
            className="mx-auto w-16 fill-blue-900/80 md:w-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M192 64L160 0H128L96 64 64 0H48C21.5 0 0 21.5 0 48V256H384V48c0-26.5-21.5-48-48-48H224L192 64zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 464c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16z" />
          </svg> */}
          <p className="mt-2 text-sm text-blue-100 md:text-base">
            <span className="tracking-[1.2rem]">-DINAS</span>-
          </p>
          <h1 className="mt-1 text-4xl font-black text-blue-100 sm:mt-4 md:text-5xl">
            Informasi dan Komunikasi
          </h1>
          <p className="font-light text-blue-300">
            Himpunan Mahasiswa Sistem Komputer Universitas Sriwijaya
          </p>
        </header>
        <svg
          className="-translate-y-9 fill-blue-500 sm:-translate-y-16 lg:-translate-y-20 xl:-translate-y-28 2xl:-translate-y-36"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path d="M0,224L48,208C96,192,192,160,288,170.7C384,181,480,235,576,250.7C672,267,768,245,864,213.3C960,181,1056,139,1152,144C1248,149,1344,203,1392,229.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      <div className="mx-2 max-w-6xl sm:mx-4 xl:mx-auto">
        <main className="mt-20 space-y-20">
          <Divider />
          <section className="space-y-20 text-center">
            <div>
              <h2 className="text-3xl text-blue-500">Pengurus Dinas</h2>
              <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                <ProfileCard
                  title="Kepala Dinas"
                  name={leader[0].properties.Name.title[0].text.content}
                  quote={leader[0].properties.Quote.rich_text[0]?.text.content}
                  image={leader[0].properties.Photo.files[0]?.file.url}
                />
                <ProfileCard
                  title="Wakil Kepala Dinas"
                  name={coLeader[0].properties.Name.title[0].text.content}
                  quote={
                    coLeader[0].properties.Quote.rich_text[0]?.text.content
                  }
                  image={coLeader[0].properties.Photo.files[0]?.file.url}
                />
              </ul>
              <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <ProfileCard
                  title="Kepala Divisi Multimedia"
                  name={mulHead[0].properties.Name.title[0].text.content}
                  quote={mulHead[0].properties.Quote.rich_text[0]?.text.content}
                  image={mulHead[0].properties.Photo.files[0]?.file.url}
                />
                <ProfileCard
                  title="Kepala Divisi Publikasi"
                  name={pubHead[0].properties.Name.title[0].text.content}
                  quote={pubHead[0].properties.Quote.rich_text[0]?.text.content}
                  image={pubHead[0].properties.Photo.files[0]?.file.url}
                />
              </ul>
            </div>
            <div>
              <h2 className="text-3xl text-blue-500">Staff Multimedia</h2>
              <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
                <ProfileCard
                  name={mulStaff[0].properties.Name.title[0]?.text.content}
                  quote={
                    mulStaff[0].properties.Quote.rich_text[0]?.text.content
                  }
                  image={mulStaff[0].properties.Photo.files[0]?.file.url}
                />
                <ProfileCard
                  name={mulStaff[1].properties.Name.title[0]?.text.content}
                  quote={
                    mulStaff[1].properties.Quote.rich_text[0]?.text.content
                  }
                  image={mulStaff[1].properties.Photo.files[0]?.file.url}
                />
                <ProfileCard
                  name={mulStaff[2].properties.Name.title[0]?.text.content}
                  quote={
                    mulStaff[2].properties.Quote.rich_text[0]?.text.content
                  }
                  image={mulStaff[2].properties.Photo.files[0]?.file.url}
                />
                <ProfileCard
                  name={mulStaff[3].properties.Name.title[0]?.text.content}
                  quote={
                    mulStaff[3].properties.Quote.rich_text[0]?.text.content
                  }
                  image={mulStaff[3].properties.Photo.files[0]?.file.url}
                />
                <ProfileCard
                  name={mulStaff[4].properties.Name.title[0]?.text.content}
                  quote={
                    mulStaff[4].properties.Quote.rich_text[0]?.text.content
                  }
                  image={mulStaff[4].properties.Photo.files[0]?.file.url}
                />
              </ul>
            </div>
            <div>
              <h2 className="text-3xl text-blue-500">Staff Publikasi</h2>
              <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                <ProfileCard
                  name={pubStaff[0].properties.Name.title[0]?.text.content}
                  quote={
                    pubStaff[0].properties.Quote.rich_text[0]?.text.content
                  }
                  image={pubStaff[0].properties.Photo.files[0]?.file.url}
                />
                <ProfileCard
                  name={pubStaff[1].properties.Name.title[0]?.text.content}
                  quote={
                    pubStaff[1].properties.Quote.rich_text[0]?.text.content
                  }
                  image={pubStaff[1].properties.Photo.files[0]?.file.url}
                />
                <ProfileCard
                  name={pubStaff[2].properties.Name.title[0]?.text.content}
                  quote={
                    pubStaff[2].properties.Quote.rich_text[0]?.text.content
                  }
                  image={pubStaff[2].properties.Photo.files[0]?.file.url}
                />
              </ul>
            </div>
          </section>
          <Divider />
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative rounded border bg-gray-100 px-6 pt-12 pb-6">
              <h2 className="absolute -top-4 right-10 text-3xl text-blue-500">
                Kilasan
              </h2>
              <p className="absolute -top-20 left-0 text-[10rem] text-gray-400">
                &quot;
              </p>
              <p className="mx-auto max-w-3xl tracking-wider sm:text-lg">
                Infokom adalah dinas yang berperan dalam pembentukkan citra
                Himasisko Unsri serta memberikan informasi kepada seluruh
                mahasiswa Sistem Komputer Universitas Sriwijaya.
              </p>
            </div>
            <div className="relative rounded border bg-gray-100 px-6 pt-12 pb-6">
              <h2 className="absolute -top-4 right-10 text-3xl text-blue-500">
                Tujuan
              </h2>
              <p className="absolute -top-20 left-0 text-[10rem] text-gray-400">
                &quot;
              </p>
              <p className="mx-auto max-w-3xl tracking-wider sm:text-lg">
                Menjadikan media komunikasi sebagai cermin dari Himasisko Unsri
                serta wadah pencerdasan dengan menggunakan jaringan yang
                informatif dan komunikatif.
              </p>
            </div>
          </section>
          <Divider />
          <section className="text-center">
            <h2 className="text-3xl text-blue-500">Laporan Postingan</h2>
            <p className="text-sm text-gray-500">Februari 2023 s.d. sekarang</p>
            <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <ReportCountCard
                title="Hari-Hari Besar"
                number={f.countReports(notionWorkTasks, c.HARI_HARI_BESAR)}
              />
              <ReportCountCard
                title="SK Information"
                number={f.countReports(notionWorkTasks, c.SK_INFORMATION)}
              />
              <ReportCountCard
                title="Tech Story"
                number={f.countReports(notionWorkTasks, c.TECH_STORY)}
              />
              <ReportCountCard
                title="Tech Tips"
                number={f.countReports(notionWorkTasks, c.TECH_TIPS)}
              />
              <ReportCountCard
                title="SK Berprestasi"
                number={f.countReports(notionWorkTasks, c.SK_BERPRESTASI)}
              />
              <ReportCountCard
                title="Ultah BPH"
                number={f.countReports(notionWorkTasks, c.ULTAH_BPH)}
              />
            </ul>
            <div className="mt-8">
              <Link
                href="/posting"
                className="inline-block rounded bg-gray-200 py-4 px-6 text-gray-700 hover:bg-gray-300"
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
  const notionWorkTasks = await notion.databases.query({
    database_id: databaseId,
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
    props: { notionWorkTasks, notionOrganizers },
  };
};
