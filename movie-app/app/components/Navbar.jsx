"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between items-center shadow-md">
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
