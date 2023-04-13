import Head from "next/head";
import CreateApps from "../../components/CreateApps";
import PageTitle from "../../components/PageTitle";
import CreateOrg from "../../components/CreateOrg";
import { useOrganizationList } from "@clerk/nextjs";


const Home = () => {

  const { organizationList, isLoaded, setActive } = useOrganizationList();

  return (
    <div>
      <Head>
        <title>Create app</title>
      </Head>
      <PageTitle title="Create app" />
      <CreateApps />
    </div>
  );
}
export default Home;