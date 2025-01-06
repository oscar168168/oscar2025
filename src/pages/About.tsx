import CVDownloadButton from "@/components/DownloadBTN";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main id="about" className="container mx-auto p-8 flex flex-col justify-center items-center lg:min-h-screen min-h-[100vh] lg:gap-12 gap-8 lg:mb-20 mb-12">
      <div className="lg:-space-y-20 -space-y-12 text-center">
        <h1 className="lg:text-[200px] text-[120px]">&quot;</h1>
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 py-1">
          Hey, I&apos;m <span className="text-primary">Rat Raksmey</span>, a
          passionate <span className="text-primary">UX/UI</span> designer who
          loves turning complex ideas into{" "}
          <span className="text-primary">user-friendly experiences</span>. With{" "}
          <span className="text-primary">2 years</span> of experience, I
          specialize in crafting designs that are not just{" "}
          <span className=" line-through">beautiful</span> but also{" "}
          <span className="text-primary">functional</span>,{" "}
          <span className="text-primary">ensuring</span> they meet user needs &
          business goals. <span></span>
        </h2>
      </div>
      <Image
        src="/images/profile2.png"
        alt="me"
        width={120}
        height={120}
        className="rounded-full border-primary"
      />
      <CVDownloadButton cvUrl="/images/account.png" />
    </main>
  );
};

export default About;
