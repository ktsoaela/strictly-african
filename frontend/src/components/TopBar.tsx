"use client";

import React, { useState, useEffect } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import { FaMagnifyingGlass } from "react-icons/fa6";

import { FaCloudSunRain } from "react-icons/fa6";


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
    <div className="bg-white text-black py-2  dark:bg-background dark:text-white">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
        <div className="flex gap-8">
      
          
          <Link href="/" className="text-xs text-grey flex items-center gap-1">
            <FaCloudSunRain />
            Partly Cloudy and Rain
          </Link>

        </div>
        <div className="flex-grow text-center">
          <Link href="/" className="text-xs text-grey">{currentDate}</Link>
        </div>
        <div className="flex items-center gap-4">
          <FaMagnifyingGlass />
          <div className="text-sm">
            <SignedOut>
              <SignInButton>Log In </SignInButton>
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
