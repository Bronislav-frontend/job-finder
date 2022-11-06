import Image from "next/image";
import icons from "../../../assets/icons";

const HeaderSection = () => {
  return (
    <header className="pt-6 pb-8 xl:flex xl:justify-between xl:items-center xl:border-b-[1px] xl:static xl:pb-[10px]">
      <h1 className="text-det font-bold tracking-[0.413333px] text-[#3A4562] border-b-[1px] pb-3 mb-6 xl:border-none xl:pb-0 xl:mb-0">
        Job Details
      </h1>
      <ul className="flex">
        <li className="mr-9">
          <button className="flex items-center">
            <Image
              src={icons.starsIcon}
              alt="like-button star icon"
              className="mr-3 xl:hidden "
            />
            <Image
              src={icons.flagIcon}
              alt="like-button flag icon"
              className="hidden xl:block xl:mr-2"
            />
            <p className="text-base -tracking-[-0.5px] text-descr xl:text-mob xl:text-[#3A4562]">
              Save to my list
            </p>
          </button>
        </li>
        <li>
          <button className="flex items-center">
            <Image
              src={icons.shareIcon}
              alt="share-button share icon "
              className="mr-3 xl:mr-2"
            />
            <p className="text-base -tracking-[-0.5px]  text-descr xl:text-mob xl:text-[#3A4562]">
              Share
            </p>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default HeaderSection;
