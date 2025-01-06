"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

const navlinks = [
  {
    name: "Home.",
    href: "#home",
  },
  {
    name: "About.",
    href: "#about",
  },
  {
    name: "Portfolio.",
    href: "#portfolio",
  },
  {
    name: "Experience.",
    href: "#experience",
  },
];

const links = [
  {
    src: "/icons/linkedin.svg",
    href: "https://www.linkedin.com/in/oscar-ramirez-9b5b3a1b7/",
  },
  {
    src: "/icons/behance.svg",
    href: "https://www.behance.net/oscarramirez",
  },
  {
    src: "/icons/telegram.svg",
    href: "https://t.me/doublepainz",
  },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="lg:py-3 py-1.5 w-screen border-b fixed z-50 bg-background/50 backdrop-blur-lg">
      <div className="grid lg:grid-cols-3 grid-cols-2 justify-center items-center lg:px-8 px-4">
        <ul className="lg:flex gap-8 hidden">
          {navlinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`link font-light text-base ${
                pathname === link.href
                  ? "text-primary "
                  : " text-foreground hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </ul>
        <Link href="/">
          <h3 className="text-primary lg:text-3xl uppercase lg:text-center">
            Oscar<span className="text-foreground">.</span>
          </h3>
        </Link>

        <div className="lg:flex gap-2 justify-end hidden">
          {links.map((item) => (
            <Link href={item.href} key={item.href} className="rBtn">
              <Image src={item.src} alt="Send" width={16} height={16} />
            </Link>
          ))}
        </div>

        <div className="lg:hidden flex justify-end">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rBtn"
          >
            <Image src="/icons/menu.svg" alt="Send" width={16} height={16} />
          </button>
        </div>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50">
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-4 py-1.5 sm:ring-1 sm:ring-background/10">
            <div className="flex items-center justify-between">
              <Link href="/">
                <h3 className="text-primary uppercase lg:text-center lg:hidden ">
                  Oscar<span className="text-foreground">.</span>
                </h3>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rBtn"
              >
                <span className="sr-only">Close menu</span>
                <Image
                  src="/icons/close.svg"
                  alt="Send"
                  width={16}
                  height={16}
                />
              </button>
            </div>

            <div className="flex flex-col gap-12 h-[calc(100vh-104px)] px-4 py-40">
              {navlinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block text-6xl font-light link ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <hr />
              <div className="flex gap-6">
                {links.map((item) => (
                  <Link href={item.href} key={item.href} className="rBtn">
                    <Image src={item.src} alt="Send" width={24} height={24} />
                  </Link>
                ))}
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </nav>
  );
};
