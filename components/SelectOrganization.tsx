import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Select from "react-select";
import { useRouter } from "next/router";

export default function SelectOrganization() {
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
      <div style={{ width: 250, float: "right" }}>
        <Select
          options={createOrganizationOptions(organizationList)}
          onChange={handleOrgChange}
          value={{ value: organization.id, label: organization.name }}
        />
      </div>
    </div>
  );
}


function createOrganizationOptions(organizationList) {
    return organizationList.map(({ organization }) => ({
      value: organization.id,
      label: organization.name,
    }));
  }
  