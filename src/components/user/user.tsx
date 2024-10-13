"use client";
import React, { useState } from 'react';

interface UserProfileData {
  nombre?: string;
  contactos?: string;
  centro_educativo?: string;
  ciclo?: string;
  habilidades_tecnicas?: string[];
}

const UserProfile: React.FC = () => {
  const [formData, setFormData] = useState<UserProfileData>({
    nombre: 'Nombre Apellido',
    contactos: '500',
    centro_educativo: 'Universidad de Ingenieria y Tecnologia (UTEC)',
    ciclo: '5',
    habilidades_tecnicas: ['Ciencias de la Computación',
        'Base de datos', "Diseño de Algortimo", "Algoritmos Avanzados",
        "Comunicación 1" 
    ],
  });
  return (

    
    // Container
    <div className="bg-[#f7f5ed] rounded-2xl m-0 p-0"> 

      <div className="w-full h-72 overflow-hidden rounded-t-2xl">
        <img src="/images/banner.jpg" alt="banner" className="w-full h-full object-cover" />
      </div>

      <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white -mt-20 ml-11">
        <img src="/images/ProfileDefault.jpg" alt="User Profile" className="w-full h-full object-cover" />
      </div>
      {/* Nombre e informacion */}
      <div className="pt-16 pl-11 grid grid-cols-2 gap-10 -mt-10">
        <div className="flex flex-col items-start ">
          <div className="flex items-baseline gap-5">
            <h1 className="text-2xl font-bold">{formData.nombre}</h1>
            <span className="text-[#9E3F90]">
            <strong>{formData.contactos} contactos</strong>
            </span>
          </div>
          <p className="text-gray-500">Ciencia de la computación</p>
            
          <div className="col-span-2 mt-5">
            <h1 className="text-xl font-semibold mt-2">Información:</h1>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Centro Educativo</strong>: {formData.centro_educativo}
                </li>
                <li>
                  <strong>Ciclo</strong>: {formData.ciclo}
                </li>
            </ul>
          </div>
        </div>
        {/* Buttons lilnkedin and github */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-6">
            <div className="w-10 h-10">
            <img src="/images/git.png" alt="GitHub" className="w-full h-full object-cover" />
            </div>
            <div className="w-10 h-10">
            <img src="/images/linkedin.png" alt="LinkedIn" className="w-full h-full object-cover" />
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
            {formData.habilidades_tecnicas?.map((habilidad, index) => (
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

export default UserProfile;
