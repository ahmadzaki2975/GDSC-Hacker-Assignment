import { KelasCard } from "./KelasCard";
import { useState, useEffect } from "react";

export const Kelas = () => {
  const [kelas, setKelas] = useState([]);
  
  //? Fetch data from API
  const axios = require("axios");
  useEffect(() => {
    axios
      .get("/api/kelas")
      .then((response) => {
        console.log(response.data)
        setKelas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center h-screen bg-cyberkarta-light">
      <h1 className="text-5xl font-bold text-cyberkarta-blue">Kelas</h1>
      <p className="mt-3 mb-5 text-xl text-cyberkarta-dark">
        Pilih kelas Cyber Security sesuai minatmu
      </p>
      <div className="grid grid-cols-3 w-fit gap-5 place-content-center">
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
