import { useState } from "react";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import JobInfoContext from "../context/JobInfoContext";
import { IJobDetails } from "../interfaces/interfaces";
import BaseLayout from "../components/BaseLayout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [jobInfo, setJobInfo] = useState<IJobDetails | null>(null);
  return (
    <>
      <NextNProgress />
      <JobInfoContext.Provider value={{ jobInfo, setJobInfo }}>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </JobInfoContext.Provider>
    </>
  );
}
