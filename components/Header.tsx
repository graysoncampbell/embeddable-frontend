import React from "react";
import { navLinks } from "../utils/data";
import Link from "next/link";
import Image from 'next/image'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <header>
      <div class="min-h-full border-solid border-b-2 border-light-blue-500">
        <nav class="bg-white-800">
          <div class="mx-auto max-w-7xl">
            <div class="flex h-16 items-center">
              <div class="flex items-center w-full justify-between">
                <div class="flex-none items-center">
                  <Image width='35px' height='35px' src="/logo.svg" alt="Your Company" />
                </div>
                <div class="flex-auto w-10/12">
                  <div class="ml-10 flex items-baseline space-x-10">
                    {navLinks.map((link, index) => {
                      return (
                          <p class="text-sm font-medium hover:text-stone-700">
                            <Link href={link.path}>
                              <span class="font-sans font-normal" key={index}>{link.name}</span>
                            </Link>
                          </p>
                      );
                    })}
                  </div>
                </div>
                <div class="flex-none">
                  <div class="relative ml-3">
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
      <div class="bg-white">
        <div class="mx-auto max-w-7xl py-6">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </div>
    </header>
  );
}