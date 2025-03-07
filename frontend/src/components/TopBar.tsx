"use client";

import React, { useState, useEffect } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import { FaMagnifyingGlass } from "react-icons/fa6";
import OfflineNotifier from '@/components/OfflineNotifier';
import Settings from "@/components/Settings";
import { FaCloudSunRain } from "react-icons/fa6";


const TopBar: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    setIsMounted(true);
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  // Only render date after component mounts
  return (
    <div className="bg-white text-black py-2 dark:bg-background dark:text-white">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
        <div className="flex gap-8">
          <Link href="/" className="text-xs text-grey flex items-center gap-1">
            <FaCloudSunRain />
            Partly Cloudy and Rain
          </Link>
        </div>
        <div className="flex-grow text-center">
          {isMounted && ( // Only render date after mounting
            <Link href="/" className="text-xs text-grey">
              {currentDate}
            </Link>
          )}
        </div>
        <div className="flex items-center gap-4">
          <FaMagnifyingGlass />
          <div className="text-sm">
            <SignedOut>
              <SignInButton>Log In</SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <Settings onClose={() => console.log("Settings closed")} />
          <OfflineNotifier />
        </div>
      </div>
    </div>
  );
};

export default TopBar;