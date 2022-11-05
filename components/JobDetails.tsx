import { useContext } from "react";
import JobInfoContext from "../context/JobInfoContext";

const JobDetails = () => {
  const context = useContext(JobInfoContext);
  const { title, salary, benefits, description, employmentType, pictures } =
    context.jobInfo;
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
};

export default JobDetails;
