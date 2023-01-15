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
                    <form onSubmit={onSubmit}>
                        <input
                        type="text"
                        placeholder="Email address"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        />
                        <label>
                        <input
                            type="radio"
                            checked={role === "admin"}
                            onChange={() => {
                            setRole("admin");
                            }}
                        />{" "}
                        Admin
                        </label>
                        <label>
                        <input
                            type="radio"
                            checked={role === "basic_member"}
                            onChange={() => {
                            setRole("basic_member");
                            }}
                        />{" "}
                        Member
                        </label>{" "}
                        <button type="submit" disabled={disabled}>
                        Invite
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  };
  