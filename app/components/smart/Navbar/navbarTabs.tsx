import { NavLink } from "react-router";
import { useRef } from "react";

import "./navbarTabs.css";

const NAV_LINKS = [
  { to: "/profile", label: "Mis datos" },
  { to: "/", label: "Mis tareas" },
  { to: "/returns", label: "Mis devoluciones" },
  { to: "/messages", label: "Mis comunicaciones" },
  { to: "/friends", label: "Mis mejores amigos" },
];

export const NavbarTabs = () => {
  const scrollRef = useRef<HTMLUListElement>(null);

  return (
    <nav className="border-b border-gray-200 overflow-x-auto no-scrollbar">
      <ul
        ref={scrollRef}
        className="flex space-x-6 text-gray-500 text-sm font-medium whitespace-nowrap px-4"
      >
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to} className="p-2 py-4 flex-shrink-0">
            <NavLink
              to={to}
              className={({ isActive }) =>
                `pb-2 border-b-2 ${
                  isActive
                    ? "border-[#639605] text-[#639605] font-semibold"
                    : "border-transparent text-gray-500"
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarTabs;
