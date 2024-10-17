"use client";
import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
interface user_prev_info {
    img_banner?: string; 
    img_profile?: string; 
    name?: string;
    contacts?: string;
    educative_center?: string;
  ciclo?: string;
  abilities?: string[];
}

export const PersonCard = ({ info }: { info: user_prev_info }) => {
  
  return (
    // Container
    <div className="bg-[#f7f5ed] rounded-2xl m-0 p-0"> 

      <div className="w-full h-72 overflow-hidden rounded-t-2xl">
        <img src={info.img_banner} alt="banner" className="w-full h-full object-cover" />
      </div>

      <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white -mt-20 ml-11">
        <img src={info.img_profile} alt="User Profile" className="w-full h-full object-cover" />
      </div>
      {/* Nombre e informacion */}
      <div className="pt-16 pl-11 grid grid-cols-2 gap-10 -mt-10">
        <div className="flex flex-col items-start ">
          <div className="flex items-baseline gap-5">
            <h1 className="text-2xl font-bold">{info.name}</h1>
            <span className="text-[#9E3F90]">
            <strong>{info.contacts} contactos</strong>
            </span>
          </div>
          <p className="text-gray-500">Ciencia de la computación</p>
            
          <div className="col-span-2 mt-5">
            <h1 className="text-xl font-semibold mt-2">Información:</h1>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Centro Educativo</strong>: {info.educative_center}
                </li>
                <li>
                  <strong>Ciclo</strong>: {info.ciclo}
                </li>
            </ul>
          </div>
        </div>
        {/* Buttons lilnkedin and github */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-3">
            <div >
            <FaGithub className="w-10 h-10" />
            </div>
            <div >
              <FaLinkedin className="w-10 h-10" />
            </div>
          </div>

          <div className="mt-0 space-y-4">
            <button className="w-48 py-2 bg-[#207DCC] text-white rounded-md font-bold">Añadir</button>
            <button className="w-48 py-2 bg-[#FFFFFF] text-[#B5B2AD] rounded-md font-bold">Chat</button>
            <button  className="w-48" >
            Edit Info
            </button>
          </div>
        </div>
        
        {/* Habilidades tecnicas */}
        <div className="col-span-2">
          <h1 className="text-xl font-semibold mt-4">Habilidades Técnicas</h1>
          <div className="flex flex-wrap gap-4 mt-2">
            {info.abilities?.map((habilidad, index) => (
              <div key={index} className="bg-white rounded-lg p-2 min-w-[100px] text-center">
                {habilidad}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

