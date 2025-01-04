import Image from "next/image";
import Hero from "@/pages/Hero";
import Portfolio from "@/pages/Portfolio";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div
        className="fixed -inset-[200px] -z-40"
      >
        <Image
          src="/icons/grid.svg"
          alt="Grid"
          width={2000}
          height={2000}
          priority
          className="object-cover h-[2000px] w-[2000px] rotate-6"
        />
      </div>

      <Hero />  
      <Portfolio />
    </main>
  );
}
