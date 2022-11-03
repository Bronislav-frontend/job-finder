import { IJobDetails, IInfo, IContext } from "../interfaces/interfaces";
import JobInfoContext from "../context/JobInfoContext";
import Router from "next/router";
import { useContext } from "react";

const JobItem = ({ info }: IInfo) => {
  const context = useContext(JobInfoContext);
  const handleChangeJobDetails = (info: IJobDetails) => {
    context.setJobInfo(info);
  };

  return (
    <li className="flex">
      <img src={info.pictures[0]} alt="" className="rounded-full" />
      <h2
        onClick={() => {
          handleChangeJobDetails(info);
          Router.push(`/job-details/${info.name}`);
        }}
      >
        {info.title}
      </h2>
      <p>Created {info.createdAt}</p>
    </li>
  );
};

export default JobItem;
