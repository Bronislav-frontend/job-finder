import Head from "next/head";
import JobsList from "../components/JobsList";
import { IJobs } from "../interfaces/interfaces";
const AUTH_TOKEN = "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

const Home = ({ jobs }: IJobs) => {
  return (
    <>
      <Head>
        <title>Job-finder</title>
        <meta name="keywords" content="job, find job, work" />
        <meta name="description" content="this is app for job lookers" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <JobsList jobs={jobs} />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}`, {
    headers: {
      Authorization: AUTH_TOKEN,
    },
  });
  const jobs: IJobs = await res.json();
  return { props: { jobs } };
}

export default Home;
