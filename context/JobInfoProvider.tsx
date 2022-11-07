import JobInfoContext from "./JobInfoContext";
import { IJobDetails } from "../interfaces/interfaces";
import { useReducer } from "react";
import jobInfoReducer from "./jobInfoReducer";

interface IJobInfoProviderProps {
  children: React.ReactNode;
}

const INITIAL_STATE: IJobDetails = {
  address: "",
  benefits: [],
  createdAt: "",
  description: "",
  email: "",
  employment_type: [],
  id: "",
  location: {
    lat: 0,
    long: 0,
  },
  name: "",
  phone: "",
  pictures: [],
  salary: "",
  title: "",
  updatedAt: "",
};

const JobInfoProvider = ({ children }: IJobInfoProviderProps) => {
  const [jobInfoState, dispatch] = useReducer(jobInfoReducer, INITIAL_STATE);

  const handleAddJobInfo = (jobDetails: IJobDetails) => {
    dispatch({ type: "addJobInfo", payload: jobDetails });
  };

  return (
    <JobInfoContext.Provider value={{ jobInfoState, handleAddJobInfo }}>
      {children}
    </JobInfoContext.Provider>
  );
};

export default JobInfoProvider;
