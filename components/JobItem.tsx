import Router from "next/router";
import Image from "next/image";
import moment from "moment";
import { useContext } from "react";
import { IJobDetails, IInfo } from "../interfaces/interfaces";
import JobInfoContext from "../context/JobInfoContext";
import locationIcon from "../assets/icons/location.png";
import flagIcon from "../assets/icons/flag.png";
import starsIcon from "../assets/icons/rating.png";

const JobItem = ({ info }: IInfo) => {
  const context = useContext(JobInfoContext);
  const handleChangeJobDetails = (info: IJobDetails) => {
    context.setJobInfo(info);
  };
  const dateOfCreation = info.createdAt.split("T")[0];
  const dateTimeAgo = moment(new Date(dateOfCreation)).fromNow();

  return (
    <li className="px-[16px] py-[24px] bg-white rounded-lg shadow-hug">
      <div className="flex justify-between">
        <div className="flex">
          <div className="mr-[26px]">
            <img
              src={info.pictures[0]}
              alt={info.title}
              width={85}
              height={85}
              className="rounded-full w-[85px] h-[85px]"
            />
          </div>
          <div className="flex flex-col max-w-[1070px]">
            <a
              className="mb-2 cursor-pointer text-lg font-bold text-[#3a4562] -tracking-[0.625px]"
              onClick={() => {
                handleChangeJobDetails(info);
                Router.push(`/job-details/${info.name}`);
              }}
            >
              {info.title}
            </a>
            <div className="flex">
              <p className="mb-2 text-[#878D9D] tracking-[0.23619px] text-base">
                Department name <span className="after:content-['·']"></span>{" "}
                {info.name}
              </p>
            </div>
            <div className="flex items-center">
              <Image
                src={locationIcon}
                alt="location icon"
                className="w-[13px] h-[18px] mr-[8px]"
              />
              <p className="text-[#878D9D] tracking-[0.23619px] text-base">
                {info.address}
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mr-8">
            <Image
              src={starsIcon}
              alt="rating icon"
              className="w-[96px] h-[18px]"
            />
          </div>
          <div className="flex flex-col justify-between items-end">
            <Image
              src={flagIcon}
              alt="flag icon"
              width={4}
              height={5}
              className="w-4 h-5 cursor-pointer"
            />
            <p className="text-[#878D9D] tracking-[0.23619px] text-base whitespace-nowrap">
              Posted {dateTimeAgo}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default JobItem;
