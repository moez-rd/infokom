import { particles } from "@/config/particles";
import Image from "next/image";
import { Fragment, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const HomeHeader: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Fragment>
      <header className="relative -z-20 flex min-h-screen items-center justify-center overflow-hidden border-b-8 bg-gray-900 pt-14 sm:min-h-fit">
        <Particles id="tsparticles" init={particlesInit} options={particles} />
        <svg
          className="absolute top-0 right-0 -z-10 -translate-y-[600px] translate-x-[400px] fill-indigo-600/60 blur-[200px]"
          id="10015.io"
          viewBox="0 0 480 480"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path d="M391,338Q353,436,249,420Q145,404,100,322Q55,240,106,168Q157,96,251,77Q345,58,387,149Q429,240,391,338Z" />
        </svg>
        <svg
          className="absolute top-0 -z-10 w-[700px] -translate-x-[1000px] fill-sky-500/60 blur-[160px]"
          id="10015.io"
          viewBox="0 0 480 480"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path d="M355,310.5Q322,381,222.5,412Q123,443,67,341.5Q11,240,87,173.5Q163,107,251,87.5Q339,68,363.5,154Q388,240,355,310.5Z" />
        </svg>
        <svg
          className="absolute top-0 right-0 -z-10 w-[700px] -translate-y-[200px]  fill-sky-500/60 blur-[80px]"
          id="10015.io"
          viewBox="0 0 480 480"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path d="M392,323.5Q337,407,242,404Q147,401,78.5,320.5Q10,240,79.5,161Q149,82,250.5,64Q352,46,399.5,143Q447,240,392,323.5Z" />
        </svg>
        <div className="mx-6 mb-20 flex w-full flex-col-reverse items-center justify-between sm:mx-60 sm:mb-0 sm:flex-row sm:py-60">
          <div className="max-w-3xl text-center sm:text-left">
            <h1 className="z-10  text-4xl font-semibold text-white/90 sm:text-7xl">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent">
                Dinas
              </span>{" "}
              Informasi dan Komunikasi
            </h1>
            <p className="text-white/70 sm:mt-4 sm:text-xl">
              Himpunan Mahasiswa Jurusan Sistem Komputer Universitas Sriwijaya
            </p>
          </div>
          <Image
            src="/images/cursor.png"
            alt="Cursor"
            width={240}
            height={240}
            className="mb-10 w-24 sm:mb-0 sm:w-60 sm:-translate-x-40"
          ></Image>
        </div>
      </header>
    </Fragment>
  );
};
export default HomeHeader;
