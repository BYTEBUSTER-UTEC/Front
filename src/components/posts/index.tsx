"use client";
import React, { use, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PostCard } from "./post_card";
import { getBaseURL } from "@/lib/utils";
import { IoAddOutline } from "react-icons/io5";

//Archivo imagen: 
import { changeUploadImage } from '@/lib/utils';


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
import { Textarea } from "../ui/textarea";
// Redux
  import { useSelector } from "react-redux";
  import { RootState } from "@/store/store";
  import { UserState } from "@/types/userTypes";


const base_url_student = `${getBaseURL()}/student-user/`;
const base_url = `${getBaseURL()}/postuser`;
const base_url_PostUser = `${getBaseURL()}/postuser`;
// localStorage.setItem('userId', '1'); //--user

// const id_user = localStorage.getItem('userId');

//Mostrar más info 
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






export const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");
  const [nuevaImgUrl, setNuevaImgUrl] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  
  // Redux
  const user: UserState = useSelector<RootState, UserState>(
    (state) => state.user
  ); //ID
  console.log("user: ", user.id)

  //File
  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  
  const postPostUser = async () => {
    if (!user.id) {
      console.error("El ID del usuario no está disponible.");
      return;
    }
    const imageURL = await changeUploadImage(file);

    if (!nuevoTitulo || !nuevaDescripcion || !imageURL) {
      console.error("Faltan datos en el formulario.");
      return;
    }
    const postData = {
      TituloPost: nuevoTitulo,
      Descripcion: nuevaDescripcion,
      ImgPostUrl: imageURL,
      StudentId: user.id,
    };
  
    setIsPosting(true); 
    setSuccessMessage(""); 
  
    try {
      const response = await axios.post(`${base_url_PostUser}`, postData);
      console.log("Post enviado:", response.data);
      //Actulizar posts: 
      await fetchPosts();

      

      setSuccessMessage("¡Post enviado correctamente!"); 
      setOpenDialog(false); 
      setNuevoTitulo("");
      setNuevaDescripcion("");
      setNuevaImgUrl("");
    } catch (error) {
      console.error("Error al enviar el post:", error);
      setSuccessMessage("Ocurrió un error al enviar el post. Intenta nuevamente."); 
    } finally {
      setIsPosting(false); 
    }
  };
  
  const fetchStudentInfo = async (studentId: BigInteger): Promise<PersonInfo | null> => {
    try {
      const response = await axios.get<PersonInfo>(`${base_url_student}${studentId}`);
      // console.log("La persona es", response.data)
      return response.data;
    } catch (error) {
      console.error(`Error fetching student info for ID ${studentId}:`, error);
      return null;
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.get<Post[]>(base_url);
      const postsWithInfo = await Promise.all(
        response.data.map(async (post) => {
          const personInfo = await fetchStudentInfo(post.StudentId);
          return { ...post, PersonInfo: personInfo };
        })
      );
      console.log("response", postsWithInfo)
      setPosts(postsWithInfo);
      setLoading(false);
      // fetchPosts(); // Actualizamos
    } catch (error) {
      
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!openDialog) {
      setSuccessMessage(""); 
    }
  }, [openDialog]);
  

  useEffect(() => {
    fetchPosts();
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full rounded-xl">
      <div className="flex justify-center ">
      {/* Realizar un post */}
      <Dialog >
      <DialogTrigger asChild className="bg-[#9E3F90] mt-5">
    <Button 
      className="w-48 fixed text-white" 
      variant="outline"
      onClick={() => setSuccessMessage("")} 
    >
      <IoAddOutline />
      Agregar un post
    </Button>
  </DialogTrigger>
        <DialogContent className="overflow-y-auto max-h-screen sm:max-w-[825px] flex flex-col items-center justify-center">
          <DialogHeader className="text-center">
            <DialogTitle>Crear un post</DialogTitle>
            <DialogDescription>Comunica tus ideas al resto</DialogDescription>
          </DialogHeader>

          <Label htmlFor="nuevoTitulo">Título:</Label>
          <Input
            id="nuevoTitulo"
            value={nuevoTitulo}
            onChange={(e) => setNuevoTitulo(e.target.value)}
            placeholder="Escribe el título de tu post"
          />

          <Label htmlFor="nuevaDescripcion">Descripción:</Label>
          <Textarea
            id="nuevaDescripcion"
            value={nuevaDescripcion}
            onChange={(e) => setNuevaDescripcion(e.target.value)}
            placeholder="Escribe la descripción"
          />

          <Label htmlFor="nuevaImgUrl">URL de la Imagen:</Label>
          <Input
            className=" w-[400px]"
            id="nuevaImgUrl"
            type="file"
            onChange={handleFileChange}
          />

          {isPosting && <p className="text-blue-500">Cargando...</p>} {/* Mensaje de carga */}
          {successMessage && <p className="text-green-500">{successMessage}</p>} {/* Mensaje de éxito */}

          <DialogFooter>
            <Button onClick={postPostUser} type="submit" disabled={isPosting}>
              {isPosting ? "Enviando..." : "Subir Post"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>


      </div>
      <div className="mt-0">
      {posts.map((post, i) => (
        <PostCard
          info={post}
          key={i}
          post_id = {post.id}
        />
      ))}
      </div>
    </div>
  );
};
