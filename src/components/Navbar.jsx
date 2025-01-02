"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navlinks = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="lg:py-3 py-1.5 w-screen border-b fixed z-50">
      <div className="flex justify-between items-center lg:px-8 px-8">
        <div>
          <h5 className="lg:text-xl text-base tracking-tight font-normal">
            Oscar 2025
          </h5>
        </div>
        <div>
          <ul className="flex gap-8 ">
            {navlinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`link ${
                  pathname === link.href ? "text-primary text-base" : "text-base text-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <button className="bg-gradient-to-br from-primary/20 to-primary/0 text-primary px-4 py-2 rounded-xl border border-primary">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};
