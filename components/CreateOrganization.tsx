import { useOrganizationList } from "@clerk/nextjs";
import { FormEventHandler, useState } from "react";

export default function CreateOrganization() {
  const { createOrganization, setActive } = useOrganizationList();
  const [organizationName, setOrganizationName] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const organization = await createOrganization({ name: organizationName });
    setOrganizationName("");
    setActive({ organization });
  };

  return (<div>
    <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative my-10">
        <div className="border-b">
            <h2 className="text-lg font-medium px-6 py-3">Create a group</h2>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="px-6 py-3 flex gap-4">
            <div className="w-1/2">
              <input
                type="text"
                name="organizationName"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.currentTarget.value)}
                className="px-6 py-3 w-full rounded-md"
                placeholder="Company name"
              />
            </div>
            <div className="w-1/2 text-right rounded-md">
              <button type="submit" className="py-3 px-6 bg-indigo-700 text-white rounded-md">Create organization</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
