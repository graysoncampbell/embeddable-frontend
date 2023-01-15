import UserList from "../components/UserList";
import InvitationList from "../components/InvitationList";
import InviteUser from "../components/InviteUser";
import PageTitle from "../components/PageTitle";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function Selector() {
  const router = useRouter();
  const { setActive, organizationList, isLoaded } = useOrganizationList();
  const { organization, ...rest } = useOrganization();

  if (!isLoaded) {
    return null;
  }

  if (router.query.selected) {
    router.replace("/organizations/selector", undefined, { shallow: true });
    setActive({ organization: router.query.selected as string });
  }

  const handleOrgChange = (e) => {
    setActive({ organization: e.value });
  };

  if (!organization) {
    return null;
  }

  return (
    <div>
      <OrganizationInfo />
    </div>
  );
}

function OrganizationInfo() {
  const {
    organization: currentOrganization,
    membership,
    isLoaded,
  } = useOrganization();

  if (!isLoaded || !currentOrganization) {
    return null;
  }

  const isAdmin = membership.role === "admin";
  return (
    <>
      <PageTitle title="Users" />
      {isAdmin && <InviteUser />}
      {isAdmin && <InvitationList />}
      <UserList />
    </>
  );
}

function createOrganizationOptions(organizationList) {
  return organizationList.map(({ organization }) => ({
    value: organization.id,
    label: organization.name,
  }));
}
