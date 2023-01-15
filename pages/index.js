import Head from "next/head";
import PageTitle from "../components/PageTitle";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <PageTitle title="Dashboard" />
    </div>
  );
}
