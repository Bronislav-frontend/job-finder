import JobsList from "../components/JobsList";
import { IJobs } from "../interfaces/interfaces";
import Pagination from "../components/Pagination";
const AUTH_TOKEN = "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

const Home = ({ jobs }: IJobs) => {
  return (
    <>
      <main className="bg-[#E6E9F2] xl:pt-[30px] xl:pb-16">
        <JobsList jobs={jobs} />
        <Pagination />
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
