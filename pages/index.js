import Head from "next/head";
import ViewApps from "../components/ViewApps";
import PageTitle from "../components/PageTitle";
import CreateOrg from "../components/CreateOrg";
import { useOrganizationList } from "@clerk/nextjs";


const Home = () => {

  const { organizationList, isLoaded, setActive } = useOrganizationList();

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      {organizationList.length === 0 ? (
        <></>
      ):(
        <PageTitle title="Dashboard" />
      )}
      {organizationList.length === 0 ? (
      <CreateOrg />
      ):(
      <ViewApps />
      )}
    </div>
  );
}
export default Home;