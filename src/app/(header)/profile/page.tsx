"use client";

import React from "react";
import { Person } from "@/components/user";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { UserState } from "@/types/userTypes";
export default function Page() {
  const user: UserState = useSelector<RootState, UserState>(
    (state) => state.user
  );
  console.log(user)
  return ( 
    <main>
      <Person />  
    </main>
  );
}
