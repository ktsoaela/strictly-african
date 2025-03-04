import React from "react";
import Link from 'next/link';
import TopBar from './TopBar';
import ThemeToggle from './ThemeToggle';
import { FaBars } from "react-icons/fa6";


const Header: React.FC = () => {
  return (
    <>
      <TopBar />
      <header className="bg-gray-900 text-white p-4 dark:bg-gray-800">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          <div className="text-xl font-bold">
                <FaBars />
          </div>
          <nav className="flex gap-8">
            <Link href="/" className="hover:text-grey-400 font-bold">STRICTLY AFRICAN</Link>
           
          </nav>
          <div className="flex items-center gap-4">
          <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
