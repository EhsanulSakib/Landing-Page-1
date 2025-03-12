"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Using react-icons
import NavLinks from "./NavLinks";
import GetStartedButton from "./GetStartedButton";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full shadow-md">
      <aside className="hidden w-full lg:flex fixed left-1/2 transform -translate-x-1/2 max-w-[1920px] mx-auto h-24 py-4 justify-between items-center z-50 px-[1%] md:px-[2%]">
        <h2>ORBEACON</h2>
        <NavLinks />
        <div className="flex gap-6 items-center">
          <Link href="/login" className="text-primaryText text-2xl hover:text-secondary transition ease-in-out duration-500 font-bold">Login</Link>
          <GetStartedButton />
        </div>
      </aside>

      {/* Mobile / Tablet Navbar */}
      <header className="lg:hidden flex items-center justify-between gap-2 p-2 fixed w-full top-0 z-50 px-[1%] md:px-[2%]">
        <div className="flex items-center">
          <button onClick={() => setIsOpen(true)} className="p-2">
            <FiMenu size={28} className="text-secondary" />
          </button>
          <h2>ORBEACON</h2>
        </div>
        <GetStartedButton />
      </header>

      {/* Drawer for Mobile */}
      <div
        className={` fixed inset-0 bg-background z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-all duration-300 lg:hidden`}
      >
        <aside className="w-full h-full p-6">
          <button
            className="absolute top-6 right-4"
            onClick={() => setIsOpen(false)}
          >
            <FiX size={28} className="text-primaryText" />
          </button>
          <h2>ORBEACON</h2>
          <NavLinks closeDrawer={() => setIsOpen(false)} />
        </aside>
      </div>
    </div>
  );
};

export default Navbar;
