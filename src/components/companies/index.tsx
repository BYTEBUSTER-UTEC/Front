"use client";

import { SearchBar } from "@/commons/searchbar";
import React from "react";

export const Companies = () => {
  return (
    <div className=" w-full rounded-xl">
      <SearchBar page={"empresas"} />
      <div className="bg-[#f7f5ed] rounded-xl p-2"></div>
    </div>
  );
};
