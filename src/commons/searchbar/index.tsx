"use client";

import Page from "@/app/(header)/jobs/page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { LuSettings2 } from "react-icons/lu";

export const SearchBar = ({ page }: { page: string }) => {
  const [placeholder, setPlaceholder] = useState<string>("");
  useEffect(() => {
    setPlaceholder(`Buscar ${page}`);
  }, [page]);

  return (
    <div className="w-full p-2 rounded-xl bg-[#f7f5ed] mb-2 flex flex-row">
      <Input type="text" placeholder={placeholder} />
      <Button variant="outline">
        <LuSettings2 className="m-0 p-0 h-[20px] w-[20px]" />
      </Button>
    </div>
  );
};
