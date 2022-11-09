import Image from "next/image";
import icons from "../assets/icons";

const Pagination = () => {
  return (
    <section className="hidden xl:flex bg-white  max-w-[515px] mx-auto justify-between px-[23px] rounded-lg">
      <button className="flex items-center py-[10px]">
        <Image src={icons.arrowLeft} alt="arrow left" className="mr-4" />
        <span className="border-r-[2px] h-[32px]"></span>
      </button>
      <ul className="flex flex-1 justify-between px-[55px]">
        <li className="flex flex-1 justify-center  font-bold tracking-[1.73px] text-lg text-[#70778B]">
          <button className="flex-1 border-b-[2px] border-transparent focus:border-[#5876C5] focus:text-[#5876C5]">
            1
          </button>
        </li>
        <li className="flex flex-1 justify-center font-bold tracking-[1.73px] text-lg text-[#70778B]">
          <button className="flex-1 border-b-[2px] border-transparent focus:border-[#5876C5] focus:text-[#5876C5]">
            2
          </button>
        </li>
        <li className="flex flex-1 justify-center font-bold tracking-[1.73px] text-lg text-[#70778B]">
          <button className=" flex-1 border-b-[2px] border-transparent focus:border-[#5876C5] focus:text-[#5876C5]">
            3
          </button>
        </li>
        <li className="flex flex-1 justify-center font-bold tracking-[1.73px] text-lg text-[#70778B]">
          <button className=" flex-1 border-b-[2px] border-transparent focus:border-[#5876C5] focus:text-[#5876C5]">
            5
          </button>
        </li>
        <li className="flex flex-1 justify-center font-bold tracking-[1.73px] text-lg text-[#70778B]">
          <button className=" flex-1 border-b-[2px] border-transparent focus:border-[#5876C5] focus:text-[#5876C5]">
            14
          </button>
        </li>
        <li className="flex flex-1 justify-center font-bold tracking-[1.73px] text-lg text-[#70778B]">
          <button className="flex-1 border-b-[2px] border-transparent">
            ...
          </button>
        </li>
        <li className="flex flex-1 justify-center font-bold tracking-[1.73px] text-lg text-[#70778B]">
          <button className="flex-1 border-b-[2px] border-transparent focus:border-[#5876C5] focus:text-[#5876C5]">
            18
          </button>
        </li>
      </ul>
      <button className="flex items-center py-[10px]">
        <span className="border-r-[2px] h-[32px]"></span>
        <Image src={icons.arrowRight} alt="arrow right" className="ml-4" />
      </button>
    </section>
  );
};

export default Pagination;
