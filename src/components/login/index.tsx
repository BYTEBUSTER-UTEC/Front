import { Spinner } from "@/commons/spinner";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

//Modificar

const Login: React.FC<{ logged: boolean }> = ({ logged }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (logged) {
      router.push("/home");
    } else setLoading(false);
  }, []);

  const login = () => {
    setLoading(true);
    router.push("/home");
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {loading ? <Spinner /> : <Button onClick={login}>Login</Button>}
    </div>
  );
};

export default Login;
