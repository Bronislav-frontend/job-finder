import Link from "next/link";

const Error = () => {
  return (
    <>
      <h1>Something went wrong</h1>
      <Link href={"/"}>Go back</Link>
    </>
  );
};

export default Error;
