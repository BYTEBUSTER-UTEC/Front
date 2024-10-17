"use client";
import { PersonCard } from "./card_info";
import { SearchBar } from "@/commons/searchbar";
import React from "react";

export const Person = () => {
  const person_prev_info = [
    {
        img_banner: "https://arquitecturaviva.com/assets/uploads/obras/39460/av_imagen.webp?h=959e0148", 
        img_profile: "https://pm1.aminoapps.com/7235/56bcd6c6dc38fbe72a0ddf0cc5117e548bc19a25r1-500-461v2_uhq.jpg", 
        name: 'Manuel A',
        contacts: '500',
        educative_center: 'Universidad de Ingenieria y Tecnologia (UTEC)',
        ciclo: '5',
        abilities: ['Ciencias de la Computación',
        'Base de datos', "Diseño de Algortimo", "Algoritmos Avanzados",
        "Comunicación 1" 
        ],
    }
  ];

  return (
    <div className=" w-full rounded-xl">
      {person_prev_info.map((person, i) => {
        return <PersonCard info={person} key={i} />;
      })}
    </div>
  );
};
