import JobItem from "./JobItem";
import { IJobDetails, IJobs } from "../interfaces/interfaces";

const JobsList = ({ jobs }: IJobs) => {
  return (
    <>
      <ul className="bg-[#E6E9F2] py-[9px] pt-[9px] px-[9px] space-y-2 xl:py-[30px]">
        {jobs.map((job: IJobDetails) => (
          <JobItem key={job.id} info={job} />
        ))}
      </ul>
    </>
  );
};

export default JobsList;
