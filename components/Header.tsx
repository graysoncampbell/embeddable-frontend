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
      <div class="min-h-full border-solid  border-b-2 border-light-blue-500">
        <nav class="bg-white-800">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <Image width='35px' height='35px' src="/logo.svg" alt="Your Company" />
                </div>
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-12">
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
                <div class="hidden md:block">
                  <div class="ml-4 flex items-center md:ml-6">
                    <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span class="sr-only">View notifications</span>
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                      </svg>
                    </button>

                    <div class="relative ml-3">
                      <div>
                        <UserButton />
                      </div>
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