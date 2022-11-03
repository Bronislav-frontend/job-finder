import JobItem from "./JobItem";
import { IJobDetails, IJobs } from "../interfaces/interfaces";

const JobsList = ({ jobs }: IJobs) => {
  return (
    <ul className="px-[260px] py-[30px]">
      {jobs.map((job: IJobDetails) => (
        <JobItem key={job.id} info={job} />
      ))}
    </ul>
  );
};

export default JobsList;
