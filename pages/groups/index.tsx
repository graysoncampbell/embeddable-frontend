import Head from "next/head";

import GroupList from "../../components/GroupList";
import CreateGroup from "../../components/CreateGroup";
import PageTitle from "../../components/PageTitle";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Embeddable | Group Management</title>
      </Head>
      <PageTitle title="Groups" />
      <CreateGroup />
      <GroupList />
    </div>
  );
}
