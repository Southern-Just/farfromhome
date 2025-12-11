"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Profile from "./Profile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-12 py-3 shadow-xs relative">
      <Link href="/">
        <h1 className="text-brown font-bold text-xl sm:text-2xl">FarFromHome</h1>
      </Link>
      <div className="flex items-center gap-4 sm:gap-6 relative">
        <p className="hidden sm:block text-sm sm:text-base">{"{ Kenya }"}</p>
        <div onClick={() => setIsOpen((prev) => !prev)}>
          <Image
            src="/icons/profile.svg"
            alt="profile"
            width={40}
            height={40}
            className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10"
          />
        </div>
        <Image
          src="/icons/logout.svg"
          alt="logout"
          width={40}
          height={40}
          className="cursor-pointer w-8 h-8 hidden sm:block sm:w-10 sm:h-10"
        />
        <Profile isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default Header;
