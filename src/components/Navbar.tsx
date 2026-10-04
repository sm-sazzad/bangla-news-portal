import React from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const date = new Date();

  const formattedDate = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  return (
    <div className="border-b border-gray-200 bg-white">
      {/* Header */}
      <div className="flex relative items-center justify-center w-[80%] mx-auto py-2">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-red-700">
            News 24 <span className="text-gray-900">BD</span>
          </h1>

          <p className="mt-1 text-sm text-gray-500">{formattedDate}</p>
        </div>

        {/* Auth Buttons */}
        <div className="absolute right-0 flex items-center gap-3">
          <button className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-red-700 hover:text-red-700">
            সাইন ইন
          </button>

          <button className="rounded-md bg-red-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-800">
            সাইন আপ
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div>
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
