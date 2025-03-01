import React from "react";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="text-xl font-bold">Strictly African</div>
        <nav className="flex gap-8">
          <Link href="/" className="hover:text-grey-400">Home</Link>
          <Link href="/news" className="hover:text-grey-400">News</Link>
          <Link href="/culture" className="hover:text-grey-400">Culture</Link>
          <Link href="/shop" className="hover:text-grey-400">Shop</Link>
        </nav>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton>Sign In</SignInButton>
            <SignUpButton>Sign Up</SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
