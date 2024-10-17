"use client";
import { PeopleCard } from "./card_info";
import { SearchBar } from "@/commons/searchbar";
import React from "react";

export const People = () => {
  const people_prev_info = [
    {
      profile_img_url:
      "", 
      name: "Manuel A",
      verified: true,
      role: "Analista",
      count: 12,
      details:
      "Tanto, tanto, tanto Tiempo al tiempo Tanto, tanto, tanto Tiempo Estoy sintiéndome solo en este corazón Silencios de odio Estoy volviendo yo a verte en esta solución Momentos de agobio Tanto, tanto, tanto Tiempo Estoy cayendo en tu mente, en toda tu  En esta tela de araña Estoy en mi imaginación Deseos de Pony Recuerdo tu nombre en esta habitación Tus labios, tus besos Recuerdo tu nombre en esta habitación Tu lado pony, tu anhelo Recuerdo (Recuerdo, recuerdo) en esta habitación Tus pony cabelloo , tus pony rostro Recuerdo tu nombre en esta habitación Tu cuerpo, tu anhelo Tanto, tanto, tanto Tiempo al tiempo Tanto, tanto, tanto Tiempo.",
    },
    {
      profile_img_url:
      "", 
      name: "Maria",
      verified: true,
      role: "Analista",
      count: 12,
      details:
      "Tanto, tanto, tanto Tiempo al tiempo Tanto, tanto, tanto Tiempo Estoy sintiéndome solo en este corazón Silencios de odio Estoy volviendo yo a verte en esta solución Momentos de agobio Tanto, tanto, tanto Tiempo Estoy cayendo en tu mente, en toda tu  En esta tela de araña Estoy en mi imaginación Deseos de Pony Recuerdo tu nombre en esta habitación Tus labios, tus besos Recuerdo tu nombre en esta habitación Tu lado pony, tu anhelo Recuerdo (Recuerdo, recuerdo) en esta habitación Tus pony cabelloo , tus pony rostro Recuerdo tu nombre en esta habitación Tu cuerpo, tu anhelo Tanto, tanto, tanto Tiempo al tiempo Tanto, tanto, tanto Tiempo.",
    },
    
  ];

  return (
    <div className=" w-full rounded-xl">
      <SearchBar page={"empresas"} />
      {/* <div className="bg-[#f7f5ed] rounded-xl p-2">Lista de cards</div> */}
      {people_prev_info.map((people, i) => {
        return <PeopleCard info={people} key={i} />;
      })}
    </div>
  );
};
