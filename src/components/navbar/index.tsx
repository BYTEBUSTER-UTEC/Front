"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { MouseEvent } from "react";

const links = [
  { href: "/home", label: "Inicio" },
  { href: "/jobs", label: "Prácticas" },
  { href: "/companies", label: "Empresas" },
  { href: "/people", label: "Personas" },
];

export const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const goTo = (e: MouseEvent<HTMLAnchorElement>, option: string) => {
    e.preventDefault(); // Opcional
    router.push(option);
  };

  return (
    <div className="flex flex-row w-full h-[50px] justify-between rounded-xl bg-[#f7f5ed] mt-2">
      <div className="max-w-[25%] w-full flex items-center h-full p-2">
        logo
      </div>
      <div className="max-w-[40%] w-full flex items-center justify-around p-2">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => goTo(e, href)}
            className={`cursor-default hover:text-black transition-colors duration-300 ${
              pathname === href ? "text-black font-bold" : ""
            }`}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="max-w-[25%] w-full flex justify-end items-center h-full p-2">
        settings
      </div>
    </div>
  );
};
