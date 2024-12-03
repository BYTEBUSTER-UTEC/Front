  
"use client";
import { Button } from "@/components/ui/button";
import React, {useState} from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { useEffect} from "react";
import { FaUserCircle } from "react-icons/fa";
import { getBaseURL } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

//Para el dialogo: 
//para formulario: 
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios";
interface ComentarioStudent {
  id: number;
  Institute: string;
  imageURL: string;
  UserName: string;
  PublicationDate: string;
  ComentarioUser: string;
}

interface Commentario {
  ComentarioStudent: ComentarioStudent;
}
interface PersonInfo {
  Name: string;
  LastName: string;
  email: string;
  UserProfile: UserProfile;
}

interface UserProfile {
  imageURL: string;
}




// Definición de tipos para los datos provenientes de la API
interface Post {
  id: BigInteger;
  PublicationDate: string;
  TituloPost: string;
  Descripcion: string;
  ImgPostUrl: string;
  StudentId: BigInteger; 
  PersonInfo: PersonInfo | null;
  
}

const base_url_comentarios = `${getBaseURL()}/postuser/FindCommentsByPostUser`;
const base_url_postComentario = `${getBaseURL()}/comentario`;
const base_url_reaction = `${getBaseURL()}/reaction`;
localStorage.setItem('userId', '1'); //--user
const id_estudiante = localStorage.getItem('userId'); 


//Teimpo
const calcularTiempoPasado = (publicationDate: string): string => {
  const ahora = new Date(); 
  const fechaPublicacion = new Date(publicationDate); 

  const diferenciaMilisegundos = ahora.getTime() - fechaPublicacion.getTime();

  const diferenciaHoras = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60));

  if (diferenciaHoras < 9) {
    return `Hace ${diferenciaHoras} ${diferenciaHoras === 1 ? "hora" : "horas"}`;
  } else {
    return "Hace más de 9 horas";
  }
}
//Para like y dislike
const onLike =async (post_id: BigInteger) => {
  const body = {
    TypeReaction: "like",
    PostId: post_id,
    StudentId: Number(id_estudiante)
  };

  try {
    const response = await axios.post<string>(base_url_reaction, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      console.log("Like añadido correctamente");
      alert("¡Like añadido correctamente! ")
    } else {
      alert(`Operación completada con estado: ${response.status}`);
    }

    console.log("response", response)
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  
};

const onDisLike = async (post_id: BigInteger) => {
  const body = {
    TypeReaction: "dislike",
    PostId: post_id,
    StudentId: Number(id_estudiante)     //--dtudent
  };

  try {
    const response = await axios.post<string>(base_url_reaction, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      console.log("Dislike añadido correctamente");
      alert("Dislike añadido correctamente! 🎉")
    } else {
      alert(`Operación completada con estado: ${response.status}`);
    }

    console.log("response", response)
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  
};


  
export const PostCard = ({ info,  post_id  }: 
  { info: Post,  post_id:BigInteger }) => {
    const [seeComments, setSeeComments] = useState(false); 
    const [comentarios, setComentarios] = useState<Commentario[]>([]); 
    const [nuevoComentario, setNuevoComentario] = useState(""); 
    const [openDialog, setOpenDialog] = useState(false);
    //Comentarios post
    const [loadingComentario, setLoadingComentario] = useState(false);
    const [mensaje, setMensaje] = useState("");
    //Comentarios get all
    const [loadingComentarios, setLoadingComentarios] = useState(false);

    //Para los likes: 
    const [likeButtonText, setLikeButtonText] = useState("Me gusta");
    const [dislikeButtonText, setDislikeButtonText] = useState("No me gusta");
    const onLike = async (post_id: BigInteger, setLikeButtonText: React.Dispatch<React.SetStateAction<string>>) => {
      const body = {
        TypeReaction: "like",
        PostId: post_id,
        StudentId: Number(id_estudiante)
      };
      
      setLikeButtonText("Cargando...");
    
      try {
        const response = await axios.post<string>(base_url_reaction, body, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 201) {
          setLikeButtonText("Like enviado correctamente");
          setTimeout(() => {
            setLikeButtonText("Me gusta");
          }, 1000); // Restablecer después de 1 segundo
        } else {
          setLikeButtonText(`Error: ${response.status}`);
          setTimeout(() => {
            setLikeButtonText("Me gusta");
          }, 1000);
        }
      } catch (error) {
        console.error("Error al enviar el like:", error);
        setLikeButtonText("Hubo un error");
        setTimeout(() => {
          setLikeButtonText("Me gusta");
        }, 1000);
      }
    };
    
    const onDisLike = async (post_id: BigInteger, setDislikeButtonText: React.Dispatch<React.SetStateAction<string>>) => {
      const body = {
        TypeReaction: "dislike",
        PostId: post_id,
        StudentId: Number(id_estudiante)     //--dtudent
      };
    
      setDislikeButtonText("Cargando...");
    
      try {
        const response = await axios.post<string>(base_url_reaction, body, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 201) {
          setDislikeButtonText("Dislike añadido correctamente");
          setTimeout(() => {
            setDislikeButtonText("No me gusta");
          }, 1000); 
        } else {
          setDislikeButtonText(`Error: ${response.status}`);
          setTimeout(() => {
            setDislikeButtonText("No me gusta");
          }, 1000);
        }
      } catch (error) {
        console.error("Error al enviar el dislike:", error);
        setDislikeButtonText("Hubo un error");
        setTimeout(() => {
          setDislikeButtonText("No me gusta");
        }, 1000);
      }
    };
    // Fin de los likes
    const fetchComentarios = async (id: BigInteger) => {
      setLoadingComentarios(true)
      try {
        const comentariosResponse = await axios.get<Commentario[]>(`${base_url_comentarios}/${id}`);
        setComentarios(comentariosResponse.data);
        console.log("Comentarios data: ", comentariosResponse.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }finally{
        setLoadingComentarios(false); 
      }
    };
    // useEffect(() => {
    //   if (seeComments) {
    //     fetchComentarios(info.id); 
    //   }
    // }, [seeComments, info.id]); 


    const postComentario = async () => {
      
    
      if (!id_estudiante) {
        console.error("El ID del estudiante no está disponible.");
        return;
      }
    
      const comentarioData = {
        ComentarioUser: nuevoComentario,
        StudentId: parseInt(id_estudiante),
        PostId: info.id,
      };
      setLoadingComentario(true); 
      setMensaje("Cargando...");
      try {
        const response = await axios.post(base_url_postComentario, comentarioData);
        console.log("Comentario enviado:", response.data);
        setNuevoComentario(""); 
        fetchComentarios(info.id); 
        setOpenDialog(false); 
        setMensaje("Comentario enviado correctamente"); 
      } catch (error) {
        console.error("Error al enviar el comentario:", error);
        setMensaje("Hubo un error al enviar el comentario"); 
      } finally {
        setLoadingComentario(false); 
      }
    };
    
    useEffect(() => {
      if (seeComments) {
        fetchComentarios(info.id); 
      }
    }, [seeComments, info.id]); 
    

  return (
    <div className="bg-[#f7f5ed] rounded-xl p-4 pl-6 pr-6 mb-2">
      {/* head */}
      <div className= "grid grid-cols-2" >
        <div className="flex gap-6">
          <div className= "w-16 h-16 rounded-lg border-5 border-red bg-red overflow-hidden  ">
            <img className=" object-cover" src={info.PersonInfo?.UserProfile.imageURL}></img>
          </div>
          <div >
            <div className="flex gap-1 items-center ">
              <h1 className="text-xl text-[#7E7A7A] ">{info.PersonInfo?.Name}</h1>
              {/* {info.verified && (
                <FaStar />
              )} */}
            </div>
            <p className="text-gray-500">{info.PersonInfo?.LastName}</p>
          </div>
        </div>
        <div className="flex">
          <p className="ml-auto">{calcularTiempoPasado(info.PublicationDate)}</p>
        </div>
      </div>
      {/* img */}
      <div className="w-full overflow-hidden rounded-2xl mt-5">
        <img className="w-full object-cover" src={info.ImgPostUrl}></img>
      </div>
      {/* post info */}
      <div className="mt-6">
        <h1 className="mt-6">{info.TituloPost}</h1>
        <ul className="mt-3">
          <li className="text-justify">{info.Descripcion}</li>
        </ul>
      </div>
      {/* buttons */}
      <div className="flex gap-5 mt-6 items-center justify-center">
        <Button className="w-60 flex gap-3  overflow-hidden justify-center" onClick={() => onLike(post_id, setLikeButtonText)} >
        {likeButtonText} 
          <AiOutlineLike  className="h-5 w-5"/>
        </Button>
        <Button
          variant="outline"
         className="w-60 flex items-center justify-center overflow-hidden" onClick={() => onDisLike(post_id, setDislikeButtonText)} >
            <p className="mr-2">{dislikeButtonText}</p> 
            <AiOutlineDislike className="h-5 w-5" />
        </Button>
        <Button onClick={()=>{setSeeComments(!seeComments)}}
          variant="outline"
          className="w-60">
          Comentarios
          
        </Button>
        
      </div>
      {seeComments && (
            <div>
              <div className="mt-5   flex justify-center items-center">
                <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                  
                  <DialogTrigger asChild onClick={() => setOpenDialog(true)}>
                    <Button
                      variant="link"
                      className="w-60">
                      Comentar
                    </Button>
                  </DialogTrigger>

                  <DialogContent 
                  aria-describedby="dialog-title"
                  className="overflow-y-auto max-h-screen  sm:max-w-[825px] flex flex-col items-center justify-center">
                    <DialogHeader className="text-center">
                      <DialogTitle id="dialog-title">Opina, interactúa, resalta</DialogTitle>
                      {/* <DialogDescription>Opina, interactúa, resalta</DialogDescription> */}
                    </DialogHeader>
                    
                    <Label htmlFor="nuevoComentario"></Label>
                    <Textarea className="h-40"
                      id="nuevoComentario"
                      value={nuevoComentario}
                      onChange={(e) => setNuevoComentario(e.target.value)}
                      placeholder="Escribe tu comentario"
                    />
                    <DialogFooter>
                    <Button
                      onClick={postComentario}
                      type="submit"
                      disabled={loadingComentario} 
                    >
                      {loadingComentario ? "Enviando..." : "Guardar cambios"}
                    </Button>
                     </DialogFooter>
                    </DialogContent>
                </Dialog >  
                </div>
                  <div className="bg-white mt-5 rounded-xl p-5">
                  {loadingComentarios ? (
                    <p>Cargando...</p> 
                  ) : comentarios.length > 0 ? (
                    comentarios.map((comentario, index) => (
                      <div key={index} className="mb-10">
                        <div className="flex gap-4 items-center">
                          <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                            <img src={comentario.ComentarioStudent.imageURL}/>
                          </div>
                          <h2 className="font-bold">{comentario.ComentarioStudent.UserName}</h2>
                          <p className="text-gray-500 text-sm">{calcularTiempoPasado(comentario.ComentarioStudent.PublicationDate)}</p>
                        </div>
                        <ul className="text-justify ml-8">
                          <p>{comentario.ComentarioStudent.ComentarioUser}</p>
                        </ul>
                      </div>
                    ))
                  ) : (
                    <p>No hay comentarios aún.</p> 
                  )}
                </div>
            </div>
          )}
    </div>
  );
};
