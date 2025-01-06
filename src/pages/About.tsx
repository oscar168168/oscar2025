import CVDownloadButton from "@/components/DownloadBTN";
import React from "react";

const About = () => {
  return (
    <main id="about" className="container mx-auto p-8 flex flex-col justify-center items-center lg:min-h-screen min-h-[100vh] lg:gap-12 gap-8 lg:mb-20 mb-12">
      <div className="lg:-space-y-20 -space-y-12 text-center">
        <h1 className="lg:text-[200px] text-[120px]">"</h1>
        <h2 className="">
          Hi, I&apos;m <span className="text-primary">Rat Raksmey</span>, a
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
      <CVDownloadButton cvUrl="/images/account.png" />
      <hr className="w-full border-primary/50" />
    </main>
  );
};

export default About;
