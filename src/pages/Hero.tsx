import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <main className="container mx-auto p-8 flex flex-col justify-center items-start lg:min-h-screen min-h-[95vh] lg:gap-12 gap-8">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
        Discover Your <span className="text-primary">Uniqueness</span>, Unlock
        Your <span className="text-primary">Creativity</span>.
      </h1>
      <p className="lg:text-2xl text-base font-light">
        I am Raksmey, a <span className="text-primary">UX/UI Designer</span>. I
        specialize in crafting intuitive and visually appealing user experiences
        through <span className="text-primary">UX/UI Design</span>.
      </p>
      <div className="flex gap-4">
        <Link href="#portfolio" className="pBtn">
          View My Work
        </Link>
        <Link href="https://t.me/doublepainz" className="sBtn">
          Let&apos;s Collaborate
        </Link>
      </div>
    </main>
  );
};

export default Hero;
