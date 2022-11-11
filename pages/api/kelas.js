export default function kelasHandler(req, res) {
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
      price: "Rp. 0",
    },
    {
      type: "Free",
      title: "Advent Of Cyber TryHackMe 2021 With Cyberkarta",
      level: "Beginner",
      price: "Rp. 0",
    },
  ];
  res.status(200).json(kelas);
}
