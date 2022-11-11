import { KelasCard } from "./KelasCard";

export const Kelas = () => {
  const kelas = [
    {
      type: "Premium",
      title: "Basic Web Security For Pentester And Bug Bounty Hunter",
      level: "All Levels",
      price: "Rp. 500.000",
    },
    {
      type: "Free",
      title: "Dokumentasi CTF 2022",
      level: "Intermediate",
      price: "Rp. 0"
    },
    {
      type: "Free",
      title: "Advent Of Cyber TryHackMe 2021 With Cyberkarta",
      level: "Beginner",
      price: "Rp. 0"
    }
  ];
  return (
    <div className="flex flex-col items-center h-screen bg-cyberkarta-light">
      <h1 className="text-5xl font-bold text-cyberkarta-blue">Kelas</h1>
      <p className="mt-3 mb-5 text-xl text-cyberkarta-dark">
        Pilih kelas Cyber Security sesuai minatmu
      </p>
      <div className="grid grid-cols-3 gap-5 mx-32">
        {kelas.map((item, index) => {
          return (
            <KelasCard
              key={index}
              type={item.type}
              title={item.title}
              level={item.level}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};
