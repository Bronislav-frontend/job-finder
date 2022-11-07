import Image from "next/image";
import calculateWhenPosted from "../../../helpers/calculateWhenPosted";
import icons from "../../../assets/icons";
import formatTheSalary from "../../../helpers/formatTheSalary";

interface IJobDescriptionProps {
  title: string;
  createdAt: string;
  salary: string;
  description: string;
  benefits: string[];
}

const JobDescriptionSection = ({
  title,
  createdAt,
  salary,
  description,
  benefits,
}: IJobDescriptionProps) => {
  return (
    <section>
      <article className="pb-[135px] xl:pt-[39px] xl:pb-[86px]">
        <div className="hidden xl:flex xl:flex-1 xl:justify-Icont xl:mb-8">
          <button className="bg-[#384564] text-white font-medium text-btn  px-[30px] py-[18px] rounded-lg tracking-[0.5px]">
            APPLY NOW
          </button>
        </div>
        <div className="mb-[14px] xl:flex xl:justify-between xl:relative xl:mb-10">
          <h2 className="text-smh -tracking-[0.75px] mb-[5px] font-bold">
            {title}
          </h2>
          <div className="flex justify-between items-center xl:flex-col-reverse xl:justify-end xl:whitespace-nowrap">
            <p className="text-posted text-hm tracking-[0.19px] font-light xl:absolute xl:-bottom-8 xl:left-0 xl:text-base xl:font-normal">
              Posted {calculateWhenPosted(createdAt)}
            </p>
            <div className="xl:flex xl:flex-col-reverse">
              <p className="text-base -tracking-[-0.5625px] text-descr text-end xl:text-mob xl:text-[#3A4562]">
                Brutto, per year
              </p>
              <p className="text-lg -tracking-[0.625px] text-[#3A4562] font-bold text-end">
                € {formatTheSalary(salary)}
              </p>
            </div>
          </div>
        </div>
        <p className="text-base -tracking-[-0.5625px] text-descr mb-[42px] xl:text-base xl:text-[#3A4562]">
          {description}
        </p>
        <div className="mb-4">
          <h3 className="text-lg text-[#3A4562] -tracking-[-0.625px] font-bold mb-1">
            Responsobilities
          </h3>
          <p className="text-base -tracking-[-0.5625px] text-descr mb-[42px] xl:text-base xl:text-[#3A4562]">
            {description}
          </p>
        </div>
        <div>
          <h3 className="text-lg text-[#3A4562] -tracking-[-0.625px] font-bold mb-4">
            Compensation & Benefits:
          </h3>
          <ul className="mb-4 xl:mb-7">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <Image
                  src={icons.bulletIcon}
                  width={9}
                  height={9}
                  alt="list item mark"
                  className="mr-4 w-[9px] h-[9px]"
                />
                <p className="text-base -tracking-[-0.5625px] text-descr xl:text-base xl:text-[#3A4562]">
                  {benefit}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 justify-center xl:justify-start">
          <button className="bg-[#384564] text-white font-medium text-btn  px-[30px] py-[18px] rounded-lg tracking-[0.5px]">
            APPLY NOW
          </button>
        </div>
      </article>
    </section>
  );
};

export default JobDescriptionSection;
