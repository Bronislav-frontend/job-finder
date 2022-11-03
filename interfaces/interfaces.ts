export interface IJobDetails {
  address: string;
  benefits: string[];
  createdAt: string;
  description: string;
  email: string;
  employmentType: string[];
  id: string;
  location: {
    lat: number;
    long: number;
  };
  name: string;
  phone: string;
  pictures: string[];
  salary: string;
  title: string;
  updatedAt: string;
}

export interface IJobs {
  jobs: IJobDetails[];
}

export interface IInfo {
  info: IJobDetails;
}

export interface IContext {
  jobInfo: IJobDetails;
  setJobInfo: React.Dispatch<React.SetStateAction<IJobDetails | null>>;
}
