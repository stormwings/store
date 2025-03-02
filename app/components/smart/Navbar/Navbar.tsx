import React from "react";
import { NavLink } from "react-router";

interface INavbarProps {}

interface INavLink {
  to: string;
  label: string;
}

const NAV_LINKS: INavLink[] = [
  { to: "/", label: "Mis tareas" },
  { to: "/profile", label: "Mis datos" },
  { to: "/returns", label: "Mis devoluciones" },
  { to: "/messages", label: "Mis comunicaciones" },
  { to: "/friends", label: "Mis mejores amigos" },
];

export const Navbar: React.FC<INavbarProps> = () => {
  return (
    <header className="bg-white shadow-sm" data-cy="navbar">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <button className="p-2" data-cy="navbar-menu">
          <span className="sr-only">Menu</span> 🍔
        </button>

        <h1 className="text-xl font-bold text-gray-800" data-cy="navbar-logo">
          Tiend<span className="text-green-600">animal</span>
        </h1>

        <div className="flex items-center gap-4">
          <button className="p-2" data-cy="navbar-search">
            🔍
          </button>
          <button className="relative p-2" data-cy="navbar-cart">
            🛒
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1 rounded-full">
              2
            </span>
          </button>
        </div>
      </div>

      <nav className="border-b" data-cy="navbar-nav">
        <ul className="flex justify-center space-x-6 text-gray-500">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to} className="py-2">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `pb-2 border-b-2 ${
                    isActive
                      ? "border-green-600 text-gray-900"
                      : "border-transparent text-gray-500"
                  }`
                }
                data-cy={`navbar-link-${to}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
