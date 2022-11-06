import { useContext } from "react";
import JobInfoContext from "../../context/JobInfoContext";
import Router from "next/router";
import Image from "next/image";
import HeaderSection from "./JobDetailsSections/HeaderSection";
import JobDescriptionSection from "./JobDetailsSections/JobDescriptionSection";
import ImageSection from "./JobDetailsSections/ImagesSection";
import AdditionalInfoSection from "./JobDetailsSections/AdditionalInfoSection";
import ContactsSection from "./JobDetailsSections/ContactsSection";
import icons from "../../assets/icons";

const JobDetails = () => {
  const context = useContext(JobInfoContext);
  const {
    title,
    salary,
    benefits,
    description,
    employment_type,
    pictures,
    name,
    phone,
    email,
    address,
    createdAt,
  } = context.jobInfo;

  const linkClickHandler = () => Router.push("/");

  return (
    <section className="mx-auto px-[15px] max-w-[775px] xl:py-14">
      <HeaderSection />
      <JobDescriptionSection
        title={title}
        createdAt={createdAt}
        salary={salary}
        description={description}
        benefits={benefits}
      />
      <div className="flex flex-col-reverse">
        <ImageSection pictures={pictures} />
        <AdditionalInfoSection
          employment_type={employment_type}
          benefits={benefits}
        />
      </div>
      <ContactsSection
        name={name}
        address={address}
        phone={phone}
        email={email}
      />
      <button
        onClick={linkClickHandler}
        className="hidden xl:flex xl:items-center xl:rounded-lg xl:bg-[#384564]/[0.14] px-6 py-4"
      >
        <Image
          src={icons.arrowIcon}
          alt="go back button icon"
          className="mr-[19px]"
        />
        <p className="text-btn text-[#3A4562] font-semibold">
          RETURN TO JOB BOARD
        </p>
      </button>
    </section>
  );
};

export default JobDetails;
