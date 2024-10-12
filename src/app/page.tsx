"use client";

import { AppLogo } from "@/commons/logo";
import { Spinner } from "@/commons/spinner";
import Login from "@/components/login";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [logged, setLogged] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    if(!logged) {
      router.push("/login");
    }
  }, []);

  if (loading) return <Spinner />;
  else
  return (
    <main className="w-full h-[100vh]">
        
    </main>
  );
}
