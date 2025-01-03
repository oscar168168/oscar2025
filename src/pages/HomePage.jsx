import Link from "next/link";
import React from "react";

export const HomePage = () => {
  return (
    <main className="container mx-auto p-8 flex flex-col justify-center items-start min-h-screen lg:gap-12 gap-8">
      <h1 className="">
        Discover Your <span className="text-primary">Uniqueness</span>, Unlock
        Your <span className="text-primary">Creativity</span>.
      </h1>
      <p className=" lg:text-2xl text-base">
        I am Raksmey a <span className="text-primary">UX/UI Designer</span>. I
        specialize in crafting intuitive and visually appealing user experiences
        through <span className="text-primary">UX/UI Design</span>.
      </p>
      <div className="flex gap-4">
        <Link href="/about" className="pBtn">
          Portfolio
        </Link>
        <Link href="/about" className="sBtn">
          Contact Me
        </Link>
      </div>
    </main>
  );
};
