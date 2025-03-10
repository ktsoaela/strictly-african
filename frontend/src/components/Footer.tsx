import React from "react";
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-black py-6 mt-12 w-full text-center dark:bg-background dark:text-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="flex justify-center gap-8 mb-4">
          <Link href="/about" className="hover:text-gray-400">
            About Us
          </Link>
          <Link href="/privacy" className="hover:text-gray-400">
            Privacy Policy
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Strictly African. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
