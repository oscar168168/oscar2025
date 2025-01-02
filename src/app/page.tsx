import Image from "next/image";
import { HomePage } from "@/pages/HomePage";

export default function Home() {
  return (
    <main className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <HomePage />  
    </main>
  );
}
