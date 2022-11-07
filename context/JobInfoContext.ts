import { createContext } from "react";
import { IJobDetails } from "../interfaces/interfaces";

export type JobInfoContextProps = {
  jobInfoState: IJobDetails;
  handleAddJobInfo: (jobInfo: IJobDetails) => void;
};

const JobInfoContext = createContext<JobInfoContextProps>(
  {} as JobInfoContextProps
);

export default JobInfoContext;
