import React from "react";
import { navLinks } from "../utils/data";
import Link from "next/link";
import Image from 'next/image'
import {
  UserButton,
  OrganizationSwitcher,
  useOrganizationList
} from "@clerk/nextjs";

export default function Header() {
  const { organizationList, isLoaded, setActive } = useOrganizationList();
  return (
    <header>
      <div className="min-h-full border-solid border-b-2 border-light-blue-500">
        <nav className="bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="flex h-16 items-center">
              <div className="flex items-center w-full justify-between">
                <div className="flex-none items-center">
                  <Image width='35px' height='35px' src="/logo.svg" alt="Your Company" />
                </div>
                {organizationList.length != 0 ? ( 
                <div className="flex-auto w-10/12">
                  <div className="ml-10 flex items-baseline space-x-10">
                    {navLinks.map((link, index) => {
                      return (
                          <p className="text-sm font-medium hover:text-stone-700">
                            <Link href={link.path}>
                              <span className="font-sans font-normal" key={index}>{link.name}</span>
                            </Link>
                          </p>
                      );
                    })}
                  </div>
                </div>
                ):(
                  <></>
                )}
                <div className="flex-none">
                  <div className="relative ml-3">
                    <div>
                    {organizationList.length != 0 ? ( 
                      <OrganizationSwitcher/>
                    ):(
                      <></>
                    )}
                    </div>
                  </div>
                </div>
                <div className="flex-none">
                  <div className="relative ml-3">
                    <div>
                      <UserButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}