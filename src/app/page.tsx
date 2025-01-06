import Image from "next/image";
import Hero from "@/pages/Hero";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Experience from "@/pages/Experience";

export default function Home() {
  return (
    <main id="home" className="min-h-screen">
      <div className="fixed -z-40 h-screen w-screen">
        <Image
          src="/icons/grid.svg"
          alt="Grid"
          width={1500}
          height={1500}
          priority
          className="object-cover h-full w-full rotate-6 lg:scale-110 scale-125"
        />
      </div>
      <Hero />
      <About />
      <Portfolio />
      <Experience />
    </main>
  );
}
