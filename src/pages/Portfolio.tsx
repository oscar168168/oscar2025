"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const portfolio = [
  {
    id: 1,
    title: "Prometeus HR",
    description: "Mobile App Design",
    image: "/images/prohr.png",
    year: "2024",
    tags: ["Next.js", "React", "Tailwind"],
    isFeatured: true,
  },
  {
    id: 2,
    title: "Prometeus Website",
    description: "Website Design",
    image: "/images/newweb.png",
    year: "2024",
    tags: ["Next.js", "React", "Tailwind"],
    isFeatured: true,
  },
  {
    id: 3,
    title: "eReader Cambodia",
    description: "Mobile App Design",
    image: "/images/ereader.png",
    year: "2024",
    tags: ["Next.js", "React", "Tailwind"],
    isFeatured: true,
  },
];

const Portfolio = () => {
  return (
    <main className="container mx-auto px-8 mb-20 flex flex-col justify-center items-start lg:gap-20 gap-8">
      <div className="space-y-6 lg:pr-8 lg:text-center">
        <h1>
          Creating Memorable Designs for{" "}
          <span className="text-primary">Web, Mobile,</span> and{" "}
          <span className="text-primary">Digital Experiences</span>{" "}
        </h1>
        <p>
          Our user-focused designs optimize efficiency and drive business
          success.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-6 gap-12">
        {portfolio.map((item) => (
          <Link
            href={`/portfolio/${item.id}`}
            key={item.id}
            className="lg:space-y-4 space-y-2 rounded-xl"
          >
            <div className="h-[300px]">
              <Image
                src={item.image}
                alt="Portfolio"
                width={600}
                height={600}
                className=" rounded-t h-[300px] object-cover"
              />
            </div>
            <div className="space-y-2">
              <h4 className="">{item.title}</h4>
              <p>{item.description}</p>
              <hr />
              <div className="flex w-full justify-between">
                <p className="text-foreground/50 lg:text-sm text-xs font-medium">
                  {item.year}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  color="#b9ff66"
                  fill="none"
                >
                  <path
                    d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex w-full  lg:justify-end">
        <Link href="/about" className="pBtn flex gap-2 items-center">
          View Portfolio{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            color="#b9ff66"
            fill="none"
          >
            <path
              d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </main>
  );
};

export default Portfolio;
