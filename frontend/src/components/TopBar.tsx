'use client';

import React, { useState, useEffect } from "react";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

const TopBar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      weekday: "long", // e.g. "Friday"
      year: "numeric", 
      month: "long", // e.g. "February"
      day: "numeric", // e.g. "24"
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="bg-white text-black py-2">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
        <div className="flex gap-8">
          <FaBars />
          <FaMagnifyingGlass />
        </div>
        <div className="flex-grow text-center">
          <Link href="/" className="text-xs text-grey">{currentDate}</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm">
            <SignedOut>
              <SignInButton>Sign In </SignInButton>&nbsp;&nbsp;
              <SignUpButton>Sign Up </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
