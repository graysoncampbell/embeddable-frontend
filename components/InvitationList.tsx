import { useOrganization } from "@clerk/nextjs";

export default function InvitationList() {
  const { invitationList } = useOrganization({ invitationList: {} });

  if (!invitationList) {
    return null;
  }

  const revoke = async (inv) => {
    await inv.revoke();
  };
  if (invitationList[0]) {
    return (
      <div>
        <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative my-10">
          <div className="border-b">
            <h2 className="text-lg font-medium px-6 py-3">Pending invitations</h2>
          </div>
          <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
            <tbody className="text-left">
              {invitationList.map((i) => (
                <tr>
                  <td className="px-6 py-3">{i.emailAddress}</td>
                  <td className="px-6 py-3 text-right"><button className="py-3 underline underline-offset-2 decoration-solid text-red-600 rounded-md" onClick={() => revoke(i)}>Revoke invitation</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
