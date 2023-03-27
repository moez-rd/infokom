import {
  Card,
  HomeHeader,
  ProfileCard,
  Section,
  SectionTitle,
  VerticalLine,
} from "@/components";
import ReportCard from "@/components/ReportCard/ReportCard";
import CONFIG from "@/config/config";
import * as c from "@/config/constants";
import {
  countReports,
  filterOrganizer,
  getOrganizerByRole,
} from "@/config/functions";
import { notion } from "@/notion/clientInit";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Fragment } from "react";

export default function Home({ notionWorkTasks, notionOrganizers }: any) {
  return (
    <Fragment>
      <Head>
        <title>{CONFIG.title}</title>
      </Head>
      <HomeHeader />

      <main className="space-y-10 pb-40">
        <VerticalLine />
        <Section className="max-w-5xl space-y-16 sm:space-y-28">
          {/* Pengurus Dinas */}
          <div>
            <SectionTitle title="Pengurus Dinas" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ProfileCard
                organizer={getOrganizerByRole(notionOrganizers, c.LEADER)}
                displayRole
              />
              <ProfileCard
                organizer={getOrganizerByRole(notionOrganizers, c.CO_LEADER)}
                displayRole
              />
              <ProfileCard
                organizer={getOrganizerByRole(notionOrganizers, c.MUL_HEAD)}
                displayRole
              />
              <ProfileCard
                organizer={getOrganizerByRole(notionOrganizers, c.PUB_HEAD)}
                displayRole
              />
            </div>
          </div>
          <div>
            {/* Staff Multimedia */}
            <SectionTitle title="Staff Multimedia" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
              {filterOrganizer(notionOrganizers, c.MUL_STAFF).map(
                (organizer: any, key: number) => (
                  <ProfileCard organizer={organizer} key={key} />
                )
              )}
            </div>
          </div>
          <div>
            {/* Staff Publikasi */}
            <SectionTitle title="Staff Publikasi" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {filterOrganizer(notionOrganizers, c.PUB_STAFF).map(
                (organizer: any, key: number) => (
                  <ProfileCard organizer={organizer} key={key} />
                )
              )}
            </div>
          </div>
        </Section>
        <VerticalLine />
        <Section className="grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Kilasan */}
          <Card className="relative -z-20 overflow-hidden text-center">
            <SectionTitle title="Kilasan" />
            <p className="text-neutral-500">
              Infokom adalah dinas yang berperan dalam pembentukkan citra
              Himasisko Unsri serta memberikan informasi kepada seluruh
              mahasiswa Sistem Komputer Universitas Sriwijaya.
            </p>

            <svg
              className="absolute -right-10 bottom-16 -z-10 w-[300px] fill-indigo-500/20 blur-xl"
              id="10015.io"
              viewBox="0 0 480 480"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d="M355,310.5Q322,381,222.5,412Q123,443,67,341.5Q11,240,87,173.5Q163,107,251,87.5Q339,68,363.5,154Q388,240,355,310.5Z" />
            </svg>
          </Card>
          {/* Tujuan */}
          <Card className="relative -z-20 overflow-hidden text-center">
            <SectionTitle title="Tujuan" />
            <p className="text-neutral-500">
              Menjadikan media komunikasi sebagai cermin dari Himasisko Unsri
              serta wadah pencerdasan dengan menggunakan jaringan yang
              informatif dan komunikatif.
            </p>

            <svg
              className="absolute -right-10 bottom-16 -z-10 w-[300px] fill-sky-500/20 blur-xl"
              id="10015.io"
              viewBox="0 0 480 480"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d="M392,323.5Q337,407,242,404Q147,401,78.5,320.5Q10,240,79.5,161Q149,82,250.5,64Q352,46,399.5,143Q447,240,392,323.5Z" />
            </svg>
          </Card>
        </Section>
        <VerticalLine />
        {/* Laporan */}
        <Section className="max-w-5xl">
          <SectionTitle
            title="Laporan"
            subtitle="Februari 2023 s.d. sekarang"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
            <ReportCard
              name="Hari-Hari Besar"
              count={countReports(notionWorkTasks, c.HARI_HARI_BESAR)}
            />
            <ReportCard
              name="SK Information"
              count={countReports(notionWorkTasks, c.SK_INFORMATION)}
            />
            <ReportCard
              name="Tech Story"
              count={countReports(notionWorkTasks, c.TECH_STORY)}
            />
            <ReportCard
              name="Tech Tips"
              count={countReports(notionWorkTasks, c.TECH_TIPS)}
            />
            <ReportCard
              name="SK Berprestasi"
              count={countReports(notionWorkTasks, c.SK_BERPRESTASI)}
            />
            <ReportCard
              name="Ultah BPH"
              count={countReports(notionWorkTasks, c.ULTAH_BPH)}
            />
          </div>
        </Section>
      </main>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const notionWorkTasks = await notion.databases.query({
    database_id: CONFIG.notionWorkTaskDatabaseId,
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
    database_id: CONFIG.notionOrganizersDatabaseId,
  });

  return {
    props: { notionWorkTasks, notionOrganizers },
  };
};
