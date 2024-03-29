import Router from "next/router";
import Image from "next/image";
import { useContext } from "react";
import calculateWhenPosted from "../helpers/calculateWhenPosted";
import { IJobDetails } from "../interfaces/interfaces";
import JobInfoContext from "../context/JobInfoContext";
import locationIcon from "../assets/icons/location.png";
import flagIcon from "../assets/icons/flag.png";
import starsIcon from "../assets/icons/rating.png";

interface IInfo {
  info: IJobDetails;
}

const JobItem = ({ info }: IInfo) => {
  const { handleAddJobInfo } = useContext(JobInfoContext);

  return (
    <li className="mx-auto px-[16px] pt-[17px] pb-[27px] rounded-lg bg-[#EFF0F5] shadow-mob hover:shadow-hov focus:shadow-hov xl:px-[16px] xl:py-[24px] xl:bg-white xl:shadow-hug xl:max-w-[1400px] group item">
      <div className="flex items-center xl:items-start ">
        <div className="mr-[19px] xl:mr-[26px]">
          <img
            src={info.pictures[0]}
            alt={info.title}
            width={66}
            height={66}
            className="rounded-full max-h-[66px] xl:min-w-[85px] xl:max-h-[85px]"
          />
        </div>
        <div className="flex-1 xl:flex xl:flex-row-reverse xl:justify-between">
          <div className="flex justify-between mb-3.5 items-center xl:items-stretch xl:mb-0">
            <div className="xl:flex xl:items-center xl:mr-[32px]">
              <Image
                src={starsIcon}
                alt="rating icon"
                className="w-[54px] h-[10px] xl:w-[96px] xl:h-[18px] xl:hidden xl:group-hover:block"
              />
            </div>
            <div className="xl:flex xl:flex-1 xl:flex-col xl:justify-between xl:items-end">
              <Image
                src={flagIcon}
                alt="flag icon"
                width={4}
                height={5}
                className="hidden xl:block xl:w-4 xl:h-5 xl:cursor-pointer "
              />
              <p className="text-[#878D9D] tracking-[0.206667px] text-post font-light xl:tracking-[0.23619px] xl:text-base xl:whitespace-nowrap">
                Posted {calculateWhenPosted(info.createdAt)}
              </p>
            </div>
          </div>
          <div className="xl:space-y-2">
            <a
              className="text-mob font-normal -tracking-[0.5625px] cursor-pointer text-[#3a4562] xl:-tracking-[0.625px] xl:text-lg xl:font-bold"
              onClick={() => {
                handleAddJobInfo(info);
                Router.push(`/job-details/${info.name}`);
              }}
            >
              {info.title}
            </a>
            <p className="tracking-[0.23619px] text-[#878D9D] xl:text-base">
              Department name <span className="after:content-['·']"></span>{" "}
              {info.name}
            </p>
            <div className="flex items-center">
              <Image
                src={locationIcon}
                alt="location icon"
                className="xl:w-[13px] xl:h-[18px] mr-[8px]"
              />
              <p className="text-[#878D9D] tracking-[0.23619px] xl:text-base">
                {info.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default JobItem;
