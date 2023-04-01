import {
  Card,
  PageHeader,
  ParagraphLink,
  Section,
  VerticalLine,
} from "@/components";
import ContactPersonLink from "@/components/ContactPersonLink/ContactPersonLink";
import CONFIG from "@/config/config";
import Head from "next/head";
import { Fragment } from "react";

export default function Medpart() {
  return (
    <Fragment>
      <Head>
        <title>{CONFIG.title} | Media Partner</title>
      </Head>
      <PageHeader title="Media Partner" />
      <main className="space-y-10 pb-40">
        <VerticalLine />
        <Section className="max-w-2xl space-y-4">
          <Card className="space-y-8 px-10 py-8 sm:px-20" disableEffectOnHover>
            <div>
              <h2 className="mb-2 text-center text-xl font-bold">
                Ingin Bekerja Sama dengan Himasisko?
              </h2>
              <p className="text-neutral-500">
                Kami melayani kerja sama antara penyelenggara event dengan
                Himasisko untuk advertising dan publikasi media promosi melalui
                media sosial di akun Himasisko.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-center text-xl font-bold">
                Syarat dan Ketentuan
              </h2>
              <ul className="list-decimal text-neutral-500">
                <li>
                  Publikasi yang dilakukan berupa kegiatan kemahasiswaan yang
                  berkaitan dengan penalaran, keilmiahan, seni, olahraga, atau
                  lomba.
                </li>
                <li>
                  Publikasi yang Himasisko lakukan berupa publikasi poster
                  kegiatan atau event.
                </li>
                <li>
                  Poster event akan dibagikan sebanyak satu kali atau lebih
                  sesuai dengan kesepakatan antara Himasisko dan pihak
                  penyelenggara event.
                </li>
                <li>
                  Poster event akan dibagikan hanya melalui akun Instagram
                  Himasisko{" "}
                  <ParagraphLink href={CONFIG.instagramUrl}>
                    @himasiskounsri
                  </ParagraphLink>
                  .
                </li>
                <li>
                  Media partnership wajib mencantumkan{" "}
                  <ParagraphLink href={CONFIG.logoUrl}>
                    logo Himasisko
                  </ParagraphLink>{" "}
                  sebagai logo partnership.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-center text-xl font-bold">
                Prosedur Media Partner
              </h2>
              <ul className="list-decimal text-neutral-500">
                <li>Menyetujui syarat dan ketentuan.</li>
                <li>Menghubungi narahubung untuk media partner.</li>
                <li>Menunggu persetujuan dari pihak Himasisko.</li>
                <li>Mengisi form tentang detail media partner.</li>
                <li>Poster akan dipost ke media sosial Himasisko.</li>
              </ul>
            </div>
          </Card>
          <Card className="px-10 py-8 sm:px-20" disableEffectOnHover>
            <p className="text-center text-neutral-500">
              Silakan menghubungi salah satu narahubung berikut untuk informasi
              lebih lanjut.
            </p>
            <div className="mt-4 flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
              <ContactPersonLink name="Fiona" phone="6285282366531" />
              <ContactPersonLink name="Akmal" phone="628993041961" />
              <ContactPersonLink name="Audrey" phone="6281273737616" />
            </div>
          </Card>
        </Section>
      </main>
    </Fragment>
  );
}
