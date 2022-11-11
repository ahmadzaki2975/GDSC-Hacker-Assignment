import Image from "next/image";

export const Hero = () => {
  return (
    <div className="h-[87vh] bg-cyberkarta-light text-cyberkarta-blue font-Nunito px-16 flex justify-between items-center">
      <div className="text-5xl flex flex-col gap-2">
        Bangun Karirmu di Bidang
        <h1 className="font-extrabold">Cyber Security</h1>
        <p className="text-xl max-w-[35ch]">
          Pelajari keahlian Cyber Security yang dibutuhkan perusahaan bersama
          pengajar berpengalaman
        </p>
        <div className="text-lg text-cyberkarta-light bg-cyberkarta-blue w-fit px-4 py-2 rounded-md mt-10">Mulai Belajar</div>
      </div>
      <div className="w-1/2">
        <Image src="/landingpage.webp" width={1000} height={1000} alt="landing page image" />
      </div>
    </div>
  );
};
