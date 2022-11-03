import { useState } from "react";
import JobInfoContext from "../context/JobInfoContext";
import { IJobDetails } from "../interfaces/interfaces";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [jobInfo, setJobInfo] = useState<IJobDetails | null>(null);
  return (
    <JobInfoContext.Provider value={{ jobInfo, setJobInfo }}>
      <Component {...pageProps} />
    </JobInfoContext.Provider>
  );
}
