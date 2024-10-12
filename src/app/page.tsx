"use client";

import { Spinner } from "@/commons/spinner";
import Login from "@/components/login";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [logged, setLogged] = useState<boolean>(false);
  console.log("asd");

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <Spinner />;
  else
    return (
      <main className={`w-full max-h-[100vh] h-full`}>
        <Login logged={false} />
      </main>
    );
}
