"use client";

import { CompaniesCard } from "./card_info";
import { SearchBar } from "@/commons/searchbar";
import React from "react";

export const Companies = () => {
  const companies_prev_info = [
    {
      profile_img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
      name: "Google Inc.",
      verified: true,
      role: "IT Corporation",
      count: 12,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia amet perferendis pariatur aut voluptas illum perspiciatis. Eos laboriosam incidunt aut sit ipsum saepe, tempore, sint dolor recusandae sequi assumenda nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita molestiae optio quam aliquam quasi pariatur quis reiciendis rerum ut odit, voluptatem natus deserunt ducimus autem maiores dignissimos consequuntur velit!",
      slug: "google-inc",
    },
    {
      profile_img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
      name: "Microsoft",
      verified: true,
      role: "IT Corporation",
      count: 12,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia amet perferendis pariatur aut voluptas illum perspiciatis. Eos laboriosam incidunt aut sit ipsum saepe, tempore, sint dolor recusandae sequi assumenda nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita molestiae optio quam aliquam quasi pariatur quis reiciendis rerum ut odit, voluptatem natus deserunt ducimus autem maiores dignissimos consequuntur velit!",
      slug: "microsoft",
    },
    {
      profile_img_url:
        "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png",
      name: "Amazon",
      verified: true,
      role: "IT Corporation",
      count: 12,
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia amet perferendis pariatur aut voluptas illum perspiciatis. Eos laboriosam incidunt aut sit ipsum saepe, tempore, sint dolor recusandae sequi assumenda nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita molestiae optio quam aliquam quasi pariatur quis reiciendis rerum ut odit, voluptatem natus deserunt ducimus autem maiores dignissimos consequuntur velit!",
      slug: "amazon-inc",
    },
  ];

  return (
    <div className=" w-full rounded-xl">
      <SearchBar page={"empresas"} />
      {/* <div className="bg-[#f7f5ed] rounded-xl p-2">Lista de cards</div> */}
      {companies_prev_info.map((company, i) => {
        return <CompaniesCard info={company} key={i} />;
      })}
    </div>
  );
};
