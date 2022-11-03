import Router from "next/router";
import JobDetails from "../../components/JobDetails";

const MoreInfo = () => {
  const linkClickHandler = () => {
    Router.push("/");
  };

  return (
    <>
      <h1>Job Details</h1>
      <JobDetails />
      {/* <button>APPLY NOW</button>
    <button>APPLY NOW</button> */}
      <button onClick={linkClickHandler}>RETURN TO JOB BOARD</button>
    </>
  );
};

export default MoreInfo;
