import { Client } from "@notionhq/client";
import Head from "next/head";
import * as c from "@/lib/constants";
import { Divider } from "@/components";

export default function MediaPartnership({ notionWorkTasks }: any) {
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
          <div className="rounded border p-4">
            <h2 className="text-lg font-bold text-blue-500">
              Ingin Bekerja Sama dengan Himasisko?
            </h2>
            <div className="text-gray-500">
              <p>
                Kami melayani kerja sama antara penyelenggara event dengan
                Himasisko untuk advertising dan publikasi media promosi melalui
                sosial media di akun Himasisko.
              </p>
              <p className="mt-4">
                Silakan menghubungi contact person berikut untuk informasi lebih
                lanjut.
              </p>
              <div className="mt-4 flex justify-center space-x-1">
                <div>
                  <a
                    className="inline-block rounded bg-blue-500 px-2 py-1 text-blue-100 hover:bg-blue-400"
                    href=""
                  >
                    Contact Person 1
                  </a>
                  <p className="text-xs">a.n. Akmal</p>
                </div>
                <div>
                  <a
                    className="inline-block rounded bg-blue-500 px-2 py-1 text-blue-100 hover:bg-blue-400"
                    href=""
                  >
                    Contact Person 2
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
