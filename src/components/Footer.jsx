import Image from "next/image";
import Link from "next/link";
import React from "react";

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

export const Footer = () => {
  return (
    <main className="mx-auto p-8 flex flex-col justify-center items-center pt-16 lg:gap-12 gap-8 bg-background border-t">
      <div className="container mx-auto grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="font-bold">Contact Me</h4>
          <div>
            <Link href="mailto:ratraksmey4@gmail.com">
              <p>ratraksmey4@gmail.com</p>
            </Link>
            <p>Prey Sa, Dangkao, Phnom Penh</p>
          </div>
        </div>
        <div className="space-y-4 text-end">
          <h4 className="font-bold">Keep in Touch</h4>
          <div className="lg:flex gap-2 justify-end hidden">
            {links.map((item) => (
              <Link href={item.href} key={item.href} className="rBtn">
                <Image src={item.src} alt="Send" width={16} height={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr className="w-full border" />
      <p className="text-center text-foreground/30">
        © {new Date().getFullYear()} Oscar. All rights reserved.
      </p>
    </main>
  );
};
