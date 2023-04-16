import "../styles/globals.css";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
} from "@clerk/nextjs";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { appWithTranslation } from 'next-i18next'

//  List pages you want to be publicly accessible, or leave empty if
//  every page requires authentication. Use this naming strategy:
//   "/"              for pages/index.js
//   "/foo"           for pages/foo/index.js
//   "/foo/bar"       for pages/foo/bar.js
//   "/foo/[...bar]"  for pages/foo/[...bar].js
const publicPages = [];

const clerk_pub_key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

function MyApp({ Component, pageProps }) {
  // Get the pathname
  const { pathname } = useRouter();

  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname);

  // If the current route is listed as public, render it directly
  // Otherwise, use Clerk to require authentication
  return (
    <ClerkProvider publishableKey={clerk_pub_key} appearance={{
      elements: {
        formButtonPrimary: 'bg-indigo-700 hover:bg-indigo-600 text-sm normal-case',
        headerTitle: 'text-2xl font-bold',
        formButtonReset: 'bg-white hover:bg-indigo-700 hover:text-white text-indigo-700 text-sm normal-case'
      }
    }}>
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <div className="bg-gray-100 h-screen">
          <SignedIn>
            <Header />
            <div className="mx-auto max-w-7xl">
              <Component {...pageProps} />
            </div>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </div>
      )}
    </ClerkProvider>
  );
}

export default appWithTranslation(MyApp);
