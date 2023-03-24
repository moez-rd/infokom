import { Client } from "@notionhq/client";
import Head from "next/head";
import * as c from "@/lib/constants";
import { Divider } from "@/components";

export default function MediaPartnership({ notionWorkTasks }: any) {
  const termsAndConditions = [
    "Pihak yang meminta media partnership dengan Himasisko wajib memfollow instagram @himasiskounsri minimal 15 orang.",
    "Publikasi yang dilakukan berupa kegiatan kemahasiswaan yang berkaitan dengan penalaran, keilmiahan, seni, olahraga, atau lomba.",
    "Publikasi yang Himasisko lakukan berupa publikasi poster kegiatan atau event.",
    "Poster event akan dibagikan sebanyak satu kali atau lebih sesuai dengan kesepakatan oleh Himasisko.",
    "Poster event akan dibagikan hanya melalui Instaragam Himasisko @himasiskounsri",
    "Media partnership wajib mencantumkan logo Himasisko sebagai logo partnership.",
  ];

  return (
    <>
      <Head>
        <title>Infokom | Media Partnership</title>
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
            Media Partnership
          </h1>
        </header>
        <Divider />
        <main className="m-10 mx-auto max-w-2xl text-center">
          <div className="rounded border py-4 px-8 sm:px-16">
            <h2 className="text-lg font-bold text-blue-500">
              Ingin Bekerja Sama dengan Himasisko?
            </h2>
            <div className="text-gray-500">
              <p>
                Kami melayani kerja sama antara penyelenggara event dengan
                Himasisko untuk advertising dan publikasi media promosi melalui
                sosial media di akun Himasisko.
              </p>
              <div>
                <h2 className="mt-8 text-lg font-bold text-blue-500">
                  Syarat dan Ketentuan
                </h2>
                <ul className="list-outside list-decimal text-left">
                  {termsAndConditions.map((termAndCondition, key) => (
                    <li key={key}>{termAndCondition}</li>
                  ))}
                </ul>
              </div>
              <p className="mt-8">
                Silakan menghubungi contact person berikut untuk informasi lebih
                lanjut.
              </p>
              <div className="mt-4 flex flex-col justify-center space-y-2 space-x-1 sm:flex-row sm:space-y-0">
                <div>
                  <a
                    className="inline-block rounded bg-blue-500 px-2 py-1 text-blue-100 hover:bg-blue-400"
                    href="https://wa.me/6281273737616"
                    target="_blank"
                  >
                    Contact Person 1
                  </a>
                  <p className="text-xs">a.n. Audrey</p>
                </div>
                <div>
                  <a
                    className="inline-block rounded bg-blue-500 px-2 py-1 text-blue-100 hover:bg-blue-400"
                    href="https://wa.me/628993041961"
                    target="_blank"
                  >
                    Contact Person 2
                  </a>
                  <p className="text-xs">a.n. Akmal</p>
                </div>
                <div>
                  <a
                    className="inline-block rounded bg-blue-500 px-2 py-1 text-blue-100 hover:bg-blue-400"
                    href="https://wa.me/6285282366531"
                    target="_blank"
                  >
                    Contact Person 3
                  </a>
                  <p className="text-xs">a.n. Fiona</p>
                </div>
              </div>
              <p></p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
