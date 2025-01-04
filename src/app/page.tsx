import Image from "next/image";
import { HomePage } from "@/pages/HomePage";
import PortfolioSlider from "@/components/PortfolioCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div
        className="absolute top-0 left-0 -z-40"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Image
          src="/images/grid.svg"
          alt="Grid"
          width={1600}
          height={1600}
          priority
          className="object-cover h-screen w-screen"
        />
      </div>

      <HomePage />
      <PortfolioSlider />
    </main>
  );
}
