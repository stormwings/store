import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "./../navbar/navbar";

export const LayoutDefault: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-gray-100 text-gray-900"
      data-cy="layout-container"
    >
      <Navbar />
      <main className="container mx-auto px-4 py-6" data-cy="layout-main">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutDefault;
