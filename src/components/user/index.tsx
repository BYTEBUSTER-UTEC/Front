"use client";
import { PersonCard } from "./card_info";
import { SearchBar } from "@/commons/searchbar";
import React, { useEffect, useState } from "react";
import { getBaseURL } from "@/lib/utils";
import axios from "axios";
//Relevant information in localstorage
const base_url = `${getBaseURL()}/student-user`;

//Local storage


//End

interface UserProfile {
  Institute: string;
  GitHub: string;
  Linkedin: string;
  imageURL: string;
  PhoneNumber: string;
  Description: string;
  studentUserId: number;
}

interface PersonInfo {
  id: number;
  Name: string;
  LastName: string;
  email: string;
  Password: string;
  UserProfile: UserProfile; 
}
//Guardamos el id del --user: 
localStorage.setItem('userId', '1'); 
//-----------important
export const Person = () => {
  const [personInfo, setPersonInfo] =  useState<PersonInfo | undefined>(undefined); // Permitir undeCambiar a un solo objeto en lugar de un array
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    
    const id = localStorage.getItem('userId');
    const fetchPersonData = async () => {
      try {
        const response = await axios.get<PersonInfo>(`${base_url}/${id}`); // Realiza la petición
        setPersonInfo(response.data);
        setLoading(false); 
      } catch (err: unknown) {
        if (axios.isAxiosError(err) && err.response) {
          setError(`Error ${err.response.status}: ${err.response.statusText}`);
        } else {
          setError("An unexpected error occurred");
        }
        setLoading(false);
      }
    };

    fetchPersonData();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full rounded-xl">
      <PersonCard info={personInfo} />
    </div>
  );
};
