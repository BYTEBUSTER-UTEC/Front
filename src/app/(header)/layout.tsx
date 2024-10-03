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
      <div className="w-full flex mt-2">
        <LeftPanel /> {/*ocultar dependiendo de la ubicacion*/}
        <div className="min-w-[70%] w-full h-full">{children}</div>
        <RightPanel />
      </div>
    </div>
  );
}
