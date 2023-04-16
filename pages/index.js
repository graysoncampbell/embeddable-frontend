import Head from "next/head";
import ViewApps from "../components/ViewApps";
import PageTitle from "../components/PageTitle";
import CreateOrg from "../components/CreateOrg";
import { useOrganizationList } from "@clerk/nextjs";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'dashboard'
      ])),
      // Will be passed to the page component as props
    },
  }
}

const Home = ({ locale }) => {

  const { organizationList, isLoaded, setActive } = useOrganizationList();
  const { t } = useTranslation('dashboard')

  return (
    <div>
      <Head>
        <title>{t('h1')}</title>
      </Head>
      {organizationList.length === 0 ? (
        <></>
      ):(
        <PageTitle title={t('h1')} />
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