import { useOrganizationList } from "@clerk/nextjs";
import { FormEventHandler, useState } from "react";
import { CreateOrganization } from "@clerk/nextjs";

export default function CreateOrg() {
  return (
    <div className="flex flex-col justify-center items-center self-center h-screen">
      <div className="">
        <CreateOrganization />
      </div>
    </div>
  );
}
