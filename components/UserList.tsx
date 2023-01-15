import type {
  MembershipRole,
  OrganizationMembershipResource,
} from "@clerk/types";
import { useState } from "react";
import { useOrganization, useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function MemberList() {
  const { membershipList, membership } = useOrganization({
    membershipList: {},
  });

  if (!membershipList) {
    return null;
  }

  const isCurrentUserAdmin = membership.role === "admin";

  return (
    <div>
      <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative my-10">
        <div className="border-b">
          <h2 className="text-lg font-medium px-6 py-3">Organization Users</h2>
        </div>
        <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
          <tbody className="text-left">
            {membershipList.map((m) => (      
              <tr>
                <td className="px-6 py-3">{m.publicUserData.firstName} {m.publicUserData.lastName}</td>
                <td className="px-6 py-3">{m.publicUserData.identifier}</td>
                <td className="px-6 py-3">{m.role}</td>
                <td className="px-6 py-3 text-right"><SelfAdminControls membership={m} />{isCurrentUserAdmin && <AdminControls membership={m} />}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const AdminControls = ({
  membership,
}: {
  membership: OrganizationMembershipResource;
}) => {
  const [disabled, setDisabled] = useState(false);
  const {
    user: { id: userId },
  } = useUser();

  if (membership.publicUserData.userId === userId) {
    return null;
  }

  const remove = async () => {
    setDisabled(true);
    await membership.destroy();
  };

  const changeRole = async (role: MembershipRole) => {
    setDisabled(true);
    await membership.update({ role });
    setDisabled(false);
  };

  return (
    <>
      {membership.role === "admin" ? (
        <button className="py-3 px-1 underline underline-offset-2 decoration-solid text-black rounded-md" disabled={disabled} onClick={() => changeRole("basic_member")}>
          Change to member
        </button>
      ) : (
        <button className="py-3 px-1 underline underline-offset-2 decoration-solid text-black rounded-md" disabled={disabled} onClick={() => changeRole("admin")}>
          Change to admin
        </button>
      )}
      <button className="py-3 px-1 underline underline-offset-2 decoration-solid text-red-600 rounded-md" disabled={disabled} onClick={remove}>
        Remove member
      </button>
    </>
  );
};

const SelfAdminControls = ({
  membership,
}: {
  membership: OrganizationMembershipResource;
}) => {
  const { push } = useRouter();
  const [disabled, setDisabled] = useState(false);
  const {
    user: { id: userId },
    isLoaded,
  } = useUser();
  const { membershipList } = useOrganization({
    membershipList: {},
  });

  if (membership.publicUserData.userId !== userId || !isLoaded) {
    return null;
  }

  // User can only leave the org if they are not an admin, or
  // if there's at least one other admin
  const canLeave =
    membership.role !== "admin" ||
    membershipList.findIndex(
      (x) => x.id !== membership.id && x.role === "admin"
    ) !== -1;

  if (!canLeave) {
    return null;
  }

  const leave = async () => {
    setDisabled(true);
    await membership.destroy();
    push("/");
  };

  return (
    <>
      {" "}
      <button className="py-3 underline underline-offset-2 decoration-solid text-red-600 rounded-md" disabled={disabled} onClick={leave}>
        Leave organization
      </button>
    </>
  );
};
