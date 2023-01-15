import { useState } from "react";
import { useOrganization } from "@clerk/nextjs";

export default function InviteMember() {
    const { organization } = useOrganization();
    const [emailAddress, setEmailAddress] = useState("");
    const [role, setRole] = useState<"basic_member" | "admin">("basic_member");
    const [disabled, setDisabled] = useState(false);
  
    const onSubmit = async (e) => {
      e.preventDefault();
      setDisabled(true);
      await organization.inviteMember({ emailAddress, role });
      setEmailAddress("");
      setRole("basic_member");
      setDisabled(false);
    };
  
    return (
        <div>
            <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative my-10">
                <div className="border-b">
                    <h2 className="text-lg font-medium px-6 py-3">Invite a user</h2>
                </div>
                <div>
                    <form onSubmit={onSubmit} className="px-6 py-3 flex gap-4">
                        <div className="w-1/2">
                            <input
                            type="text"
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            className="px-6 py-3 w-full rounded-md"
                            />
                        </div>
                        <div className="w-1/4">
                            <select className="px-4 py-3 w-full rounded-md" 
                                onChange={() => {
                                setRole("basic_member");
                                }}>
                                <option value="basic_member">Set permission level </option>
                                <option value="basic_member">Member</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div className="w-1/4 text-right rounded-md">
                            <button type="submit" disabled={disabled} className="py-3 px-6 bg-indigo-700 text-white rounded-md">
                            Invite
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  };
  