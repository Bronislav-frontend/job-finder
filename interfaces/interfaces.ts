export interface IJobDetails {
  address: string;
  benefits: string[];
  createdAt: string;
  description: string;
  email: string;
  employment_type: string[];
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

export interface IContext {
  jobInfo: IJobDetails;
  setJobInfo: React.Dispatch<React.SetStateAction<IJobDetails | null>>;
}

export interface IBaseLayoutProps {
  children?: React.ReactNode;
}
