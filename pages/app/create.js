import Head from "next/head";
import CreateApps from "../../components/CreateApps";
import PageTitle from "../../components/PageTitle";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useOrganizationList } from "@clerk/nextjs";
import { useTranslation } from 'next-i18next'


const Home = ({ createApps, appCatalog }) => {

  const { t } = useTranslation('createApps', 'appCatalog')

  const { organizationList, isLoaded, setActive } = useOrganizationList();

  return (
    <div>
      <Head>
        <title>{t('h1')}</title>
      </Head>
      <PageTitle title={t('h1')} />
      <CreateApps />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'createApps',
        'appCatalog'
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default Home;
