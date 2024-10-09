import { Button } from "@/components/ui/button";
import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { IoIosWarning } from "react-icons/io";
import { TiLocation } from "react-icons/ti";

//google job info hardcodeado
const info = {
  profile_img_url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
  title: "Practicante de desarrollo de Software",
  company: "Google",
  verified: true,
  time_ago: "12d",
  location: "Surco, Lima, Perú",
  info: "", //formato tip tap
  slug: "google-inc",
  id: "1",
};

export const JobInfo = () => {
  //capturar slug de la ruta
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-row w-full justify-between bg-cardLight rounded-xl p-2 pl-4 pr-4 h-fit">
        <div className="flex flex-row w-fit">
          <div className=" flex justify-center items-center">
            <img
              src={info.profile_img_url}
              className="  max-w-[45px] w-full h-[45px] m-0 p-0"
            />
          </div>
          <div className="flex flex-col pl-4">
            <h5>{info.title}</h5>
            <p>{info.company}</p>
          </div>
        </div>
        <div className=" flex justify-center items-center flex-row">
          {/*botones para guardar, postular, y reportar*/}
          <Button className="rounded-[12px] max-w-[100px] bg-sky-600">
            Postular
          </Button>
          &nbsp;
          <Button variant="ghost" className="rounded-[12px] p-2 ">
            <CiBookmark className="h-[25px] w-[25px]" />
          </Button>
          <Button variant="ghost" className="rounded-[12px] p-2">
            <IoIosWarning className="h-[25px] w-[25px]" />
          </Button>
        </div>
      </div>
      <div className="bg-cardLight rounded-xl mt-2 p-4 pl-6 pr-6">
        <div className="flex flex-row items-center">
          <FiClock className="mr-2" />{" "}
          <p className="text-[13px]">{info.time_ago}</p>
        </div>
        <div className="flex flex-row items-center">
          <TiLocation className="mr-2" />{" "}
          <p className="text-[13px]">{info.location}</p>
        </div>

        <h5 className="pt-2 pb-2">Descripción del puesto</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime
          a sit. Magnam, voluptatem minima? Aliquid corporis corrupti, placeat,
          deserunt quaerat aut a facere optio voluptas aperiam velit incidunt!
          Nam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          distinctio unde quasi, minus deserunt rerum, laboriosam asperiores
          porro voluptatibus assumenda, inventore ab voluptate sequi quo officia
          laborum explicabo sed a!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime
          a sit. Magnam, voluptatem minima? Aliquid corporis corrupti, placeat,
          deserunt quaerat aut a facere optio voluptas aperiam velit incidunt!
          Nam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          distinctio unde quasi, minus deserunt rerum, laboriosam asperiores
          porro voluptatibus assumenda, inventore ab voluptate sequi quo officia
          laborum explicabo sed a!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime
          a sit. Magnam, voluptatem minima? Aliquid corporis corrupti, placeat,
          deserunt quaerat aut a facere optio voluptas aperiam velit incidunt!
          Nam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          distinctio unde quasi, minus deserunt rerum, laboriosam asperiores
          porro voluptatibus assumenda, inventore ab voluptate sequi quo officia
          laborum explicabo sed a!
        </p>
      </div>
    </div>
  );
};
