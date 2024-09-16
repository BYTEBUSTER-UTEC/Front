import LeftPanel from "@/components/leftpanel";
import { Navbar } from "@/components/navbar";
import RightPanel from "@/components/rightpanel";
import React from "react";

export default function HeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col max-w-[1280px] w-full ">
      <Navbar />
      <div className="w-full h-full flex pt-2">
        <LeftPanel /> {/*ocultar dependiendo de la ubicacion*/}
        <div className="min-w-[70%] w-full bg-[#f7f5ed] rounded-xl p-2">
          {children}
        </div>
        <RightPanel />
      </div>
    </div>
  );
}
