"use client";
import { Spinner } from "@/commons/spinner";
import { useContext, useEffect, useState } from "react";
import AuthContext from "./context/AuthContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const context = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    if(!context?.user) {
      router.push("/login");
    } else {
      router.push("/home");
    }
  }, []);

  return (
    <main className="w-full h-[100vh]">
      {loading ?
        <div className="p-4">
          <Spinner />
        </div> : ""}
    </main>
  );
}
