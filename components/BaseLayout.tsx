import React from "react";
import Head from "next/head";
import { IBaseLayoutProps } from "../interfaces/interfaces";

const BaseLayout: React.FC<IBaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Job-finder</title>
        <meta name="keywords" content="job, find job, work" />
        <meta name="description" content="this is app for job lookers" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default BaseLayout;
