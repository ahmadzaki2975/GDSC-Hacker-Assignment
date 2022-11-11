import Image from "next/image";

export const Discord = () => {
  return (
    <div className="flex justify-between items-center px-16 h-screen bg-cyberkarta-light ">
      <div className="w-fit">
        <Image src="/discord.webp" alt="Discord" width={500} height={500} />
      </div>
      <div className="grid">
        <h1 className="text-5xl mb-4 text-cyberkarta-blue">
          Gabung Grup Discord
        </h1>
        <h1 className="text-5xl mb-4 text-cyberkarta-blue font-extrabold ">
          Cyberkarta
        </h1>
        <p className="text-xl max-w-[50ch]">
          Bergabunglah dengan grup Cyberkarta agar dapat berdiskusi bersama
          pengajar berpengalaman
        </p>
        <div className="mt-5 bg-cyberkarta-blue text-cyberkarta-light w-fit px-5 py-3 cursor-pointer rounded-lg text-xl hover:bg-blue-600 hover:shadow-lg">
          Gabung Discord
        </div>
      </div>
    </div>
  );
};
