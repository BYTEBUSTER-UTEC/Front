import { Button } from "@/components/ui/button";
import { job_prev_info } from "@/types/jobsTypes";
import { notFound, useRouter } from "next/navigation";
import React from "react";
import { VscVerifiedFilled } from "react-icons/vsc";

export const JobsCard = ({ info }: { info: job_prev_info }) => {
  const router = useRouter();
  const basePath = "/jobs";
  return (
    <div className="bg-[#f7f5ed] rounded-xl p-4 pl-6 pr-6 mb-2">
      <div className="flex flex-row w-full">
        <div className=" flex justify-center items-center">
          <img
            src={info.profile_img_url}
            className="  min-w-[45px] w-full h-[45px] m-0 p-0"
          />
        </div>
        <div className="w-full flex flex-row justify-between">
          <div className=" flex flex-col pl-4 justify-center">
            <div className="text-[22px] flex flex-row items-center">
              <h4>{info.title}</h4>
              &nbsp;
              {info.verified && <VscVerifiedFilled />}
            </div>
            <p className="text-[14px]">{info.company}</p>
          </div>

          <div className="w-fit">
            <p>{info.time_ago}</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#71717a] h-[1px] mt-4 mb-4"></div>
      <div>
        <p>{info.preview}</p>
      </div>
      <div className="pt-4 pb-2 flex flex-row ">
        <Button
          className="bg-sky-600 rounded-[12px] max-w-[100px] w-full"
          onClick={() => {
            if (info.slug == "google-inc")
              router.push(`${basePath}/${info.slug}`);
          }}
        >
          Ver
        </Button>
        &nbsp;&nbsp;
        <Button
          variant="outline"
          className="rounded-[12px] max-w-[100px] w-full"
        >
          Guardar
        </Button>
      </div>
    </div>
  );
};
