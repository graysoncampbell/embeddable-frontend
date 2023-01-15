import Head from "next/head";

import OrganizationList from "../../components/OrganizationList";
import CreateOrganization from "../../components/CreateOrganization";
import PageTitle from "../../components/PageTitle";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Embeddable | Group Management</title>
      </Head>
      <PageTitle title="Groups" />
      <CreateOrganization />
      <OrganizationList />
    </div>
  );
}
