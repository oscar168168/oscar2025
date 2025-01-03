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
    name: "Experience",
    href: "#",
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="lg:py-3 py-1.5 w-screen border-b fixed z-50">
      <div className="flex justify-between items-center lg:px-8 px-8">
        <div>
          <ul className="flex gap-8 ">
            {navlinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`link ${
                  pathname === link.href
                    ? "text-primary text-base"
                    : "text-base text-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <button className="pBtn">Let's Talk</button>
        </div>
      </div>
    </nav>
  );
};
