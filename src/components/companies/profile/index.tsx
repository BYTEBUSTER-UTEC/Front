"use client";

import { UserComment } from "./comment";
import { Spinner } from "@/commons/spinner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

//===========================Interfaces=================================

interface company_profile_info {
  cover_img_url: string;
  profile_img_url: string;
  name: string;
  verified: boolean;
  contacts: number;
  role: string;
  github_url: string;
  linkedIn_url: string;
  //count: number;
  details: string;
  slug: string;
}

//======================================================================

//https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png
//despues de pedir al back
const google_info = {
  cover_img_url:
    "https://media.licdn.com/dms/image/v2/D563DAQFydSPUShE9gQ/image-scale_191_1128/image-scale_191_1128/0/1715888854094/google_cover?e=1728622800&v=beta&t=SRd1Mifod82coMH34Nb1bhf_cW1_Cho3p1a5aT5T3Nw",
  profile_img_url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
  name: "Google Inc.",
  verified: true,
  role: "IT Corporation",
  count: 12,
  contacts: 500,
  github_url: "https://github.com/google",
  linkedIn_url: "https://www.linkedin.com/company/google",
  details:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia amet perferendis pariatur aut voluptas illum perspiciatis. Eos laboriosam incidunt aut sit ipsum saepe, tempore, sint dolor recusandae sequi assumenda nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita molestiae optio quam aliquam quasi pariatur quis reiciendis rerum ut odit, voluptatem natus deserunt ducimus autem maiores dignissimos consequuntur velit!",
  slug: "google-inc",
};

const users_test_info = [
  {
    profile_img_url:
      "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png",
    name: "Rodrigo Perez",
    time_ago: "2 semanas",
    xp: 4,
    role: "Estudiante",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente vitae distinctio fugit voluptatibus at ratione perferendis aliquid repellendus optio nostrum aperiam vero minus explicabo sed, soluta porro ad aspernatur odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, hic quae, necessitatibus sed harum atque eius porro nihil similique repudiandae fugit sapiente sunt modi nemo suscipit. Voluptate culpa recusandae adipisci?",
  },
  {
    profile_img_url:
      "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png",
    name: "Daniel Molina",
    time_ago: "1 mes",
    xp: 2,
    role: "Estudiante",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente vitae distinctio fugit voluptatibus at ratione perferendis aliquid repellendus optio nostrum aperiam vero minus explicabo sed, soluta porro ad aspernatur odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, hic quae, necessitatibus sed harum atque eius porro nihil similique repudiandae fugit sapiente sunt modi nemo suscipit. Voluptate culpa recusandae adipisci?",
  },
  {
    profile_img_url:
      "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png",
    name: "Valeria Perez",
    time_ago: "3 semanas",
    xp: 1,
    role: "Estudiante",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente vitae distinctio fugit voluptatibus at ratione perferendis aliquid repellendus optio nostrum aperiam vero minus explicabo sed, soluta porro ad aspernatur odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, hic quae, necessitatibus sed harum atque eius porro nihil similique repudiandae fugit sapiente sunt modi nemo suscipit. Voluptate culpa recusandae adipisci?",
  },
];

export const CompanyProfile =
  (/*{ info }: { info: company_profile_info }*/) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [info, setInfo] = useState<company_profile_info | null>(null);

    useEffect(() => {
      setTimeout(() => {
        setInfo(google_info);
        setLoading(false);
      }, 2000);
    }, []);

    if (!info || loading) {
      return <Spinner />;
    } else
      return (
        <div className="flex w-full h-full flex-col">
          <div className="w-full flex flex-col rounded-t-xl h-full">
            <div className="w-full h-[40%]">
              <img
                className="h-full w-full rounded-t-xl"
                src={info.cover_img_url}
              />
            </div>
            <div className="flex relative bg-transparent">
              <div className="flex bg-white rounded-xl absolute left-[20px] top-[-40px] p-2">
                <img
                  className="w-[50px] h-[50px] "
                  src={info.profile_img_url}
                />
              </div>
            </div>
            <div className="flex flex-col p-4 rounded-b-xl h-[60%] h-full bg-[#f7f5ed] pl-6 pr-6">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col pt-4">
                  <div className="flex flex-row items-center">
                    <h4>{info.name}</h4>
                    <div className="flex items-center justify-center h-full pl-4 text-[#9e3f90] pt-1">
                      <p>
                        <b>{info.contacts}+ contactos</b>
                      </p>
                    </div>
                  </div>
                  <p>{info.role}</p>
                </div>
                <div className="flex flex-row justify-end ">
                  <div className="flex flex-row justify-between pr-6">
                    <Link
                      href={info.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="w-[25px] h-[25px] mr-2" />
                    </Link>
                    <Link
                      href={info.linkedIn_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="w-[25px] h-[25px]" />
                    </Link>
                  </div>
                  <div className="flex flex-col w-[120px]">
                    <Button className="bg-sky-600 rounded-[12px] max-w-[120px] w-full mb-2">
                      Seguir
                    </Button>

                    <Button
                      className="rounded-[12px] max-w-[120px] w-full"
                      variant="outline"
                    >
                      Chat
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col pt-4">
                <h5>Información</h5>
                <p>{info.details}</p>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#f7f5ed] rounded-xl p-4 pr-6 pl-6 mt-2">
            <h5>Testimonios ex-practicantes</h5>
          </div>
          {users_test_info.map((comment, i) => {
            return <UserComment key={i} info={comment} />;
          })}
        </div>
      );
  };
