import { AppLogo } from "@/commons/logo";
import { Spinner } from "@/commons/spinner";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


//Modificar

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [logged, setLogged] = useState<boolean>(false);

  useEffect(() => {
    if (logged) {
      router.push("/home");
    } else setLoading(false);
  }, []);

  const login = () => {
    setLoading(true);
    router.push("/home");
  };

  const register = () => {
    router.push("/register");
  }

  return (
    <div className="min-w-96 flex items-center justify-center bg-[#F7F5ED] p-12 rounded-2xl">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col items-center">
          <AppLogo />
          <h1 className="font-bold text-3xl mt-4">
            Login
          </h1>
          <h3 className="text-sm font-normal p-2">
            Ingresa tu información.
          </h3>
        </div>
        <form className="flex flex-col gap-2">
          <input placeholder="Email" name="email" className="text-sm p-3 px-5 rounded-lg"></input>
          <input placeholder="Contraseña" name="password" className="text-sm p-3 px-5 rounded-lg" type="password"></input>
        </form>
        {loading ? <Spinner /> : <Button onClick={login} className="w-full">Login</Button>}
        <button className="mx-auto w-fit text-sm hover:underline" onClick={register}>Registrarse</button>
      </div>
    </div>
  );
};

export default Login;
