  
  import { Button } from "@/components/ui/button";
  import React, {useState} from "react";
  import { FaStar } from "react-icons/fa";
  import { AiOutlineLike } from "react-icons/ai";
  import { AiOutlineDislike } from "react-icons/ai";
  import { useEffect} from "react";
  import { FaUserCircle } from "react-icons/fa";

  interface Comment {
    profile_img: string;
    name: string;
    time: string;
    comment: string;
  }

  interface PostCard_info {
    time: number; // Se agregó para incluir el tiempo
    profile_img_url: string;
    img_url: string;
    name: string;
    title: string;
    verified: boolean;
    role: string;
    countLike: number; 
    countDislike: number; 
    post_text: string;
    Comentarios: Comment[];
    slug: string;
  }

  export const PostCard = ({ info, onLike, onDisLike }: 
    { info: PostCard_info, onLike:() => void, onDisLike:()=>void}) => {
      const [seeComments, setSeeComments] = useState(false); 


    return (
      <div className="bg-[#f7f5ed] rounded-xl p-4 pl-6 pr-6 mb-2">
        {/* head */}
        <div className= "grid grid-cols-2" >
          <div className="flex gap-6">
            <div className= "w-16 h-16 rounded-lg border-5 border-red bg-red overflow-hidden  ">
              <img className=" object-cover" src={info.profile_img_url}></img>
            </div>
            <div >
              <div className="flex gap-1 items-center ">
                <h1 className="text-xl text-[#7E7A7A] ">{info.name}</h1>
                {info.verified && (
                  <FaStar />
                )}
              </div>
              <p className="text-gray-500">{info.role}</p>
            </div>
          </div>

          <div className="flex">
            <p className="ml-auto">{info.time} h</p>
          </div>
        </div>
        {/* img */}
        <div className="w-full overflow-hidden rounded-2xl mt-5">
          <img className="w-full object-cover" src={info.img_url}></img>
        </div>
        {/* post info */}
        <div className="mt-6">
          <h1 className="mt-6">{info.title}</h1>
          <ul className="mt-3">
            <li className="text-justify">{info.post_text}</li>
          </ul>
        </div>
        {/* buttons */}
        <div className="flex gap-5 mt-6 items-center justify-center">
          
          <Button className="w-60 flex gap-3  overflow-hidden justify-center" onClick={() => onLike()} >
            Me gusta
            <AiOutlineLike  className="h-5 w-5"/>
          </Button>
          <Button
            variant="outline"
           className="w-60 flex items-center justify-center overflow-hidden" onClick={() => onDisLike()} >
              <p className="mr-2">No me gusta</p> 
              <AiOutlineDislike className="h-5 w-5" />
          </Button>

          <Button onClick={()=>{setSeeComments(!seeComments)}}
            variant="outline"
            className="w-60">
            Comentarios
            
          </Button>
          
        </div>

        {seeComments && (
              <div className="bg-white mt-5 rounded-xl p-5">
                  {info.Comentarios.map((comentario, index) => (
                    <div key={index} className="mb-5">
                      <div className="flex gap-2 items-center">
                        
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                            {comentario.profile_img === "" ?
                            (<FaUserCircle className="w-full h-full"/>):
                            (<img className="w-full h-full object-cover" src={comentario.profile_img} alt="" />)}
                        </div>
                        <h2 className="font-bold">{comentario.name}</h2>
                        <p className="text-gray-500 text-sm">{comentario.time} h</p>
                      </div>
                      <ul className="text-justify">
                        <li><p>{comentario.comment}</p></li>
                      </ul>
                      
                    </div>
                  ))}
              </div>
            )}


      </div>
    );
  };
