import { Materi } from "./svgs/Materi";
import { Video } from "./svgs/Video";
import { Bahasa } from "./svgs/Bahasa";
import { Konsultasi } from "./svgs/Konsultasi";
import { Akses } from "./svgs/Akses";


export const KenapaCyberkarta = () => {
  return (
    <div className="bg-cyberkarta-light h-screen flex justify-between items-center px-16">
      <div className="">
        <h1 className="text-5xl mb-4">
          Kenapa <span className="font-extrabold text-cyberkarta-blue">Cyberkarta?</span>
        </h1>
        <p className="text-xl max-w-[35ch]">
          Saatnya kamu dapat belajar Cyber Security di mana saja dan kapan saja
        </p>
      </div>
      <div className="grid grid-cols-3 place-items-center h-fit gap-x-24 gap-y-4">
        <div>
          <Materi />
          <h1 className="font-bold text-xl">Materi</h1>
          <p className="text-lg max-w-[120px]">Materi selalu Up to Date</p>
        </div>
        <div>
          <Video />
          <h1 className="font-bold text-xl">Materi</h1>
          <p className="text-lg max-w-[120px]">Materi selalu Up to Date</p>
        </div>
        <div>
          <Bahasa />
          <h1 className="font-bold text-xl">Materi</h1>
          <p className="text-lg max-w-[120px]">Materi selalu Up to Date</p>
        </div>
        <div>
          <Konsultasi />
          <h1 className="font-bold text-xl">Materi</h1>
          <p className="text-lg max-w-[120px]">Materi selalu Up to Date</p>
        </div>
        <div>
          <Akses />
          <h1 className="font-bold text-xl">Materi</h1>
          <p className="text-lg max-w-[120px]">Materi selalu Up to Date</p>
        </div>
      </div>

    </div>
  );
};
