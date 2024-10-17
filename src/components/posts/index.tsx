"use client";
import React from "react";
import { PostCard } from "./post_card";
import { useEffect, useState } from "react";

export const Posts = () => {
    const posts_prev_info = [
      {
        time: 12,
        profile_img_url:
        "https://economiaverde.pe/wp-content/uploads/2019/04/concytec-logo.png", 
        img_url: "data:image/png;base64,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", 
        name: "Concytec",
        title: "Titulo", 
        verified: true,
        role: "Institucion",
        countLike: 12,
        countDislike: 12,
        post_text: "Soy una ballena de color azul. Mi espalda sopla y tú ves esa fuente de agua limpia aún. Nuestra casa abierta, era el ancho mar. Viajábamos en paz sin manchas de petróleo que evitar. Busco un sitio puro donde descansar. No hay muchas como yo, me tengo que cuidar de ti. Nubes blancas, cielo transparente y el humano compartiendo con otros un sueño que quizás ya no regrese, pues ya es tarde para todos nosotros. Soy el cóndor majestuoso del Perú. Mi cuello gira y tú me miras con ojos de luz. Busco un sitio alto donde recordar que hubo un tiempo mejor, pues como yo no quedan más. Si tus hijos te preguntan cómo fui, no sé que les dirás, me tuve que alejar de ti. Cordilleras blancas dominando todo ser que se alimenta del río. Hombres en aldeas cultivando sin decirle al campo dame lo que es mío. Estás equivocado, no sabes dónde vas. No te asustes si tu nieto te pregunta: ¿qué hiciste con el amigo gavilán? Estás equivocado, no sabes dónde vas. Guanacos, osos panda, renos, águilas, delfines y todo lo demás. Estás equivocado, no sabes donde vas. Estás equivocado, no sabes donde vas. Estás equivocado, no sabes donde vas. Un espíritu ronda por la selva llorando lo que fue el jaguar. Estás equivocado, no sabes donde vas. Bienvenido al mundo del hombre construido con detergentes y también con alquitrán. Soy una ballena de color azul. Mi espalda sopla y tú ves esa fuente de agua limpia aún.",
        Comentarios:
          [
            {
              profile_img: "",
              name: "Manuel A",
              time: "12",
              comment: "Soy una ballena de color azul Mi espalda sopla y tú Ves esa fuente de agua limpia aún Nuestra casa abierta, era el ancho mar Viajábamos en paz Sin manchas de petróleo que evitar Busco un sitio puro donde descansar No hay muchas como yo Me tengo que cuidar de ti"
            }, 
            {
              profile_img: "",
              name: "Luis A",
              time: "14",
              comment: "Soy una ballena de color azul Mi espalda sopla y tú Ves esa fuente de agua limpia aún Nuestra casa abierta, era el ancho mar Viajábamos en paz Sin manchas de petróleo que evitar Busco un sitio puro donde descansar No hay muchas como yo Me tengo que cuidar de ti"
            },

          ],  
        slug: "google-inc",
      }, 
      {
        time: 12,
        profile_img_url:
        "https://economiaverde.pe/wp-content/uploads/2019/04/concytec-logo.png", 
        img_url: "data:image/png;base64,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", 
        name: "Google Inc.",
        title: "Titulo", 
        verified: false,
        role: "Institucion",
        countLike: 12,
        countDislike: 12,
        post_text: "Soy una ballena de color azul. Mi espalda sopla y tú ves esa fuente de agua limpia aún. Nuestra casa abierta, era el ancho mar. Viajábamos en paz sin manchas de petróleo que evitar. Busco un sitio puro donde descansar. No hay muchas como yo, me tengo que cuidar de ti. Nubes blancas, cielo transparente y el humano compartiendo con otros un sueño que quizás ya no regrese, pues ya es tarde para todos nosotros. Soy el cóndor majestuoso del Perú. Mi cuello gira y tú me miras con ojos de luz. Busco un sitio alto donde recordar que hubo un tiempo mejor, pues como yo no quedan más. Si tus hijos te preguntan cómo fui, no sé que les dirás, me tuve que alejar de ti. Cordilleras blancas dominando todo ser que se alimenta del río. Hombres en aldeas cultivando sin decirle al campo dame lo que es mío. Estás equivocado, no sabes dónde vas. No te asustes si tu nieto te pregunta: ¿qué hiciste con el amigo gavilán? Estás equivocado, no sabes dónde vas. Guanacos, osos panda, renos, águilas, delfines y todo lo demás. Estás equivocado, no sabes donde vas. Estás equivocado, no sabes donde vas. Estás equivocado, no sabes donde vas. Un espíritu ronda por la selva llorando lo que fue el jaguar. Estás equivocado, no sabes donde vas. Bienvenido al mundo del hombre construido con detergentes y también con alquitrán. Soy una ballena de color azul. Mi espalda sopla y tú ves esa fuente de agua limpia aún.",
        Comentarios:
          [
            {
              profile_img: "https://elcomercio.pe/resizer/v2/6Y2EDIISGFGVFANEVDCR5LCG34.jpg?auth=f58b5c647a09717054d85bb8b9a6bc624bfcb14fe9c60b5246730ea6a513e2b0&width=1200&height=810&quality=90&smart=true",
              name: "Manuel B",
              time: "12",
              comment: "Soy una ballena de color azul Mi espalda sopla y tú Ves esa fuente de agua limpia aún Nuestra casa abierta, era el ancho mar Viajábamos en paz Sin manchas de petróleo que evitar Busco un sitio puro donde descansar No hay muchas como yo Me tengo que cuidar de ti"
            }, 
            {
              profile_img: "",
              name: "Luis C",
              time: "14",
              comment: "Soy una ballena de color azul Mi espalda sopla y tú Ves esa fuente de agua limpia aún Nuestra casa abierta, era el ancho mar Viajábamos en paz Sin manchas de petróleo que evitar Busco un sitio puro donde descansar No hay muchas como yo Me tengo que cuidar de ti"
            },

          ],  
        slug: "google-inc",
      }
    ];
    const onLike = () => {
      console.log("like añadido correctamente")
    };
    const onDisLike = () => {
      console.log("Dislike añadido correctamente")
    };

    

    

  
    return (
      <div className="w-full rounded-xl">
        {posts_prev_info.map((company, i) => {
          return <PostCard info={company} key={i} 
          onLike={() => onLike()}
          onDisLike={() => onDisLike()}
          />;
        })}
      </div>
    );
  };