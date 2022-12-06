import { useContext, useEffect, useState } from "react";
import { IJobDetails } from "../../interfaces/interfaces";
import Router from "next/router";
import Image from "next/image";
import JobInfoContext from "../../context/JobInfoContext";
import HeaderSection from "./JobDetailsSections/HeaderSection";
import JobDescriptionSection from "./JobDetailsSections/JobDescriptionSection";
import ImageSection from "./JobDetailsSections/ImagesSection";
import AdditionalInfoSection from "./JobDetailsSections/AdditionalInfoSection";
import ContactsSection from "./JobDetailsSections/ContactsSection";
import icons from "../../assets/icons";

const JobDetails = () => {
  const { jobInfoState } = useContext(JobInfoContext);
  const [persistedJobInfo, setPersistedJobInfo] = useState<IJobDetails>();
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
  } = jobInfoState;

  useEffect(() => {
    const jobInfoState: string | null = window.localStorage.getItem("jobInfo");
    jobInfoState !== null && setPersistedJobInfo(JSON.parse(jobInfoState));
  }, []);

  useEffect(() => {
    jobInfoState.title !== "" &&
      window.localStorage.setItem("jobInfo", JSON.stringify(jobInfoState));
  }, []);

  const handleButtonClick = () => {
    Router.push("/");
    window.localStorage.clear();
  };

  return (
    <>
      {title !== "" && (
        <section className="xl:flex mx-auto px-[15px] xl:py-14 xl:max-w-[1258px]">
          <div className="mr-20">
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
            <div className="relative">
              <button
                onClick={handleButtonClick}
                className="hidden xl:flex xl:items-center xl:rounded-lg xl:bg-[#384564]/[0.14] px-6 py-4 absolute -left-[60px] -top-[80px]"
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
            </div>
          </div>
          <div>
            <ContactsSection
              name={name}
              address={address}
              phone={phone}
              email={email}
            />
          </div>
        </section>
      )}
      {title === "" && persistedJobInfo && (
        <section className="xl:flex mx-auto px-[15px] xl:py-14 xl:max-w-[1258px]">
          <div className="mr-20">
            <HeaderSection />
            <JobDescriptionSection
              title={persistedJobInfo.title}
              createdAt={persistedJobInfo.createdAt}
              salary={persistedJobInfo.salary}
              description={persistedJobInfo.description}
              benefits={persistedJobInfo.benefits}
            />
            <div className="flex flex-col-reverse">
              <ImageSection pictures={persistedJobInfo.pictures} />
              <AdditionalInfoSection
                employment_type={persistedJobInfo.employment_type}
                benefits={persistedJobInfo.benefits}
              />
            </div>
            <div className="relative">
              <button
                onClick={handleButtonClick}
                className="hidden xl:flex xl:items-center xl:rounded-lg xl:bg-[#384564]/[0.14] px-6 py-4 absolute -left-[60px] -top-[80px]"
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
            </div>
          </div>
          <div>
            <ContactsSection
              name={persistedJobInfo.name}
              address={persistedJobInfo.address}
              phone={persistedJobInfo.phone}
              email={persistedJobInfo.email}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default JobDetails;
