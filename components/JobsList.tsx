import JobItem from "./JobItem";
import { IJobDetails, IJobs } from "../interfaces/interfaces";

const JobsList = ({ jobs }: IJobs) => {
  return (
    <>
      <ul className="py-[9px] px-[9px] xl:py-0 space-y-2 xl:pb-[50px]">
        {jobs.map((job: IJobDetails) => (
          <JobItem key={job.id} info={job} />
        ))}
      </ul>
    </>
  );
};

export default JobsList;
