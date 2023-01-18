import Head from "next/head";
import PageTitle from "../components/PageTitle";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>Page not found</title>
      </Head>
      <PageTitle title="Page not found" />
    </div>
  );
}
