import Image from "next/image";
import Hero from "@/pages/Hero";
import Portfolio from "@/pages/Portfolio";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="fixed -z-40 h-screen w-screen">
        <Image
          src="/icons/grid.svg"
          alt="Grid"
          width={2000}
          height={2000}
          priority
          className="object-cover h-[2000px] w-[2000px] rotate-6 lg:scale-110 scale-125"
        />
      </div>
      <Hero />
      <Portfolio />
    </main>
  );
}
