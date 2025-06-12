/** Christopher Findlay, Hammad Mahmood, Samuel Kyle Yung, Gurnoor Singh | April 1st, 2025
 * Assignment 3 - Full-Stack Web Application
 *
 * This component renders the navigation bar for the application.
 * It includes a link to the home page and "Log In" and "Log Out" buttons.
 * The navbar is styled with a background color, padding, shadow, and flex layout.
 * The navbar is also static and none of the buttons do anything and is just for visual 
 * purposes and standards.
 */

"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between items-center shadow-md bg-amber-100 border-2 border-solid">
      <Link href="/" className="font-bold text-lg text-blue-700">
        Home
      </Link>
      <button className="bg-slate-500 text-yellow-100 px-6 py-q rounded-lg">
        Log Out{" "}
      </button>
      <button className="bg-slate-500 text-yellow-100 px-6 py-q rounded-lg">
        Log In
      </button>
    </div>
  );
};

export default Navbar;
