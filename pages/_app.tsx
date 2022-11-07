import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import JobInfoProvider from "../context/JobInfoProvider";
import BaseLayout from "../components/BaseLayout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <JobInfoProvider>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </JobInfoProvider>
    </>
  );
}
