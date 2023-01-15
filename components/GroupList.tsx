import { useOrganizationList } from "@clerk/nextjs";
import Link from "next/link";

const GroupList = () => {
  const { organizationList, isLoaded } = useOrganizationList();
  if (!isLoaded) {
    return null;
  }

  return (
    <div>
      <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative my-10">
        <div className="border-b">
          <h2 className="text-lg font-medium px-6 py-3">Your groups</h2>
        </div>
        <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
          <tbody className="text-left">
            {/* {organizationList.length === 0 ? (
              <tr>
                <td className="px-6 py-3">You do not belong to any organizations yet.</td>
              </tr>
            ) : ( */}
              {organizationList.map(({ organization }) => (
                  <tr>
                    <td className="px-6 py-3">{organization.name}</td>
                    <td className="px-6 py-3 text-right"><Link
                    href={`/organizations/selector?selected=${organization.id}`}
                  >
                    <a className="py-3 underline underline-offset-2 decoration-solid text-black rounded-md">Switch</a>
                  </Link></td>
                  </tr>
                ))}
            {/* )} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupList;
