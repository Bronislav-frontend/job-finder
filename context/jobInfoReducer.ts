import { IJobDetails } from "../interfaces/interfaces";

type JobInfoAction = {
  type: "addJobInfo";
  payload: IJobDetails;
};

const jobInfoReducer = (state: IJobDetails, action: JobInfoAction) => {
  switch (action.type) {
    case "addJobInfo":
      return (state = action.payload);

    default:
      return state;
  }
};

export default jobInfoReducer;
