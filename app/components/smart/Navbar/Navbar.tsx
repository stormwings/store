import React from "react";
import { NavbarTabs } from "./navbarTabs";

export const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-sm w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <button className="p-1 text-gray-700 text-xl">
          <span className="sr-only">Menú</span> ☰
          <span className="sr-only">Buscar</span> 🔍
        </button>

        <h1 className="text-2xl font-bold text-gray-800">
          Tiend<span className="text-[#639605]">animal</span>
        </h1>

        <div className="flex items-center">
          <button className="p-2 text-xl">😁</button>
          <button className="relative p-2 text-xl">
            🛒
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1 rounded-full">
              2
            </span>
          </button>
        </div>
      </div>

      <NavbarTabs />
    </header>
  );
};

export default Navbar;
