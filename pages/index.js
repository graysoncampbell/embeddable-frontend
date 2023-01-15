import Head from "next/head";
import ViewApps from "../components/ViewApps";
import PageTitle from "../components/PageTitle";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <PageTitle title="Dashboard" />
      <ViewApps />
    </div>
  );
}
