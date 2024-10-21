import { Spinner } from "@/commons/spinner";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const StudentForm = () => {
    const router = useRouter();
    const [page, setPage] = useState<number>(1);
    const [msg, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const careers = [
        "Administración de Empresas",
        "Administración Hotelera y Turismo",
        "Antropología",
        "Arquitectura",
        "Biología",
        "Ciencias de Datos",
        "Ciencias de la Computación",
        "Ciencias de la Comunicación",
        "Ciencias Políticas",
        "Contabilidad",
        "Derecho",
        "Economía",
        "Educación",
        "Enfermería",
        "Filosofía",
        "Física",
        "Ingeniería Ambiental",
        "Ingeniería Civil",
        "Ingeniería de Sistemas",
        "Ingeniería de Software",
        "Ingeniería Electrónica",
        "Ingeniería Industrial",
        "Ingeniería Mecánica",
        "Ingeniería Química",
        "Marketing",
        "Medicina",
        "Nutrición",
        "Odontología",
        "Psicología",
        "Relaciones Internacionales",
        "Sociología",
        "Veterinaria"
    ]

    const [data, setData] = useState({
        name: "",
        last_name: "",
        email: "",
        password: "",
        university: "",
        career: "",
        ciclo: 1
    });

    const login = () => {
        router.push("/login");
    }

    const handleContinue = (event: any) => {
        event.preventDefault();
        setPage(2);
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(true);

        //ToDo: API Call
        await timeout(1000); // SIMULATING API CALL
        setMessage("Usuario creado exitosamente. Redirigiendo...");
        await timeout(3000); // SIMULATING API CALL
        router.push("/login");
    }

    // UTIL FUNCTION (SIM. ONLY)
    function timeout(delay: number) {
        return new Promise(res => setTimeout(res, delay));
    }
    // UTIL FUNCTION (SIM. ONLY)

    const handleChange = (event: any) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className="w-96 flex items-center justify-center bg-[#F7F5ED] p-12 rounded-2xl">
            {page == 1 ?
                <div className="flex flex-col gap-6 w-full">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-3xl mt-4">
                            Sign Up
                        </h1>
                        <h3 className="text-sm font-normal p-2">
                            Información Principal
                        </h3>
                    </div>
                    <form className="flex flex-col gap-2" onSubmit={handleContinue}>
                        <input placeholder="Nombres" name="name" className="text-sm p-3 px-5 rounded-lg"
                            value={data.name} onChange={handleChange}></input>
                        <input placeholder="Apellidos" name="last_name" className="text-sm p-3 px-5 rounded-lg"
                            value={data.last_name} onChange={handleChange}></input>
                        <input placeholder="Email" name="email" className="text-sm p-3 px-5 rounded-lg" type="email"
                            value={data.email} onChange={handleChange}></input>
                        <input placeholder="Contraseña" name="password" className="text-sm p-3 px-5 rounded-lg" type="password"
                            value={data.password} onChange={handleChange}></input>
                        <Button className="w-full mt-3" disabled={!data.name || !data.last_name || !data.email || !data.password} type="submit">Continuar</Button>
                    </form>
                    <button className="mx-auto w-fit text-sm hover:underline" onClick={login}>Login</button>
                </div>
                :
                <div className="flex flex-col gap-6 w-full">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-3xl mt-4">
                            Sign Up
                        </h1>
                        <h3 className="text-sm font-normal p-2">
                            Informacion Adicional
                        </h3>
                    </div>
                    <form className="flex flex-col gap-2">
                        <input placeholder="Universidad" name="university" className="text-sm p-3 px-5 rounded-lg"
                            value={data.university} onChange={handleChange}></input>
                        <span className="flex flex-row gap-2 justify-between">
                            <select name="career" className="text-sm p-3 px-5 rounded-lg w-full overflow-hidden"
                                value={data.career || ""} onChange={handleChange}>
                                <option value="" disabled>Selecciona una carrera</option>
                                {careers.map((career, index) => (
                                    <option key={index} value={career}>{career}</option>
                                ))}
                            </select>
                            <input placeholder="Ciclo" name="ciclo" type="number" min={1} max={10} className="text-sm p-3 px-5 rounded-lg"
                                value={data.ciclo} onChange={handleChange}></input>
                        </span>
                    </form>
                    <div className="flex flex-col gap-2 mt-8">
                        <button className="flex flex-row justify-between text-sm font-bold p-2 px-5 rounded-lg w-full bg-white border text-[#B1B1B1] items-center">
                            Vincular con GitHub
                            <FaGithub className="w-[25px] h-[25px]" />
                        </button>
                        <button className="flex flex-row justify-between text-sm font-bold p-2 px-5 rounded-lg w-full bg-white border text-[#B1B1B1] items-center">
                            Vincular con LinkedIn
                            <FaLinkedin className="w-[25px] h-[25px]" />
                        </button>
                    </div>
                    {msg ? <p className="text-sm justify-center">{msg}</p> : ""}
                    {loading ? <Spinner /> : <Button className="w-full" onClick={handleSubmit}>Registrarse</Button>}
                    <button className="mx-auto w-fit text-sm hover:underline" onClick={login}>Login</button>
                </div>
            }
        </div>
    );
};

export default StudentForm;