import Head from "next/head";

import OrganizationList from "../components/OrganizationList";
import CreateOrganization from "../components/CreateOrganization";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <OrganizationList />
      <CreateOrganization />
    </div>
  );
}
