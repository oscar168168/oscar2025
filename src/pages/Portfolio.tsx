"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const portfolio = [
  {
    id: 1,
    title: "eReader Cambodia",
    description: "Mobile App Design",
    image: "/images/ereader.png",
    year: "2024",
    link: "https://www.behance.net/gallery/205182233/eReader-Mobile-Application",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Prometeus Website",
    description: "Website Design",
    image: "/images/oldweb.png",
    year: "2023",
    link: "https://prometeus-kc.com/",
    isFeatured: true,
  },

  {
    id: 3,
    title: "Monaco Byte Labs",
    description: "Website Design",
    image: "/images/monoca.png",
    year: "2023",
    link: "https://monacobytelabs.com/",
    isFeatured: true,
  },
];

const caseStudies = [
  {
    id: 1,
    title: "Electro Mart",
    description: "Mobile App Design",
    image: "/images/electromart.png",
    year: "2024",
    link: "https://www.behance.net/gallery/216323099/Case-Study-ElectroMart-Moble-Appication",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Prometeus HR",
    description: "Mobile App Design",
    image: "/images/prohr.png",
    year: "2024",
    link: "https://www.behance.net/gallery/205166097/Prometeus-HR-Mobile-Application",
    isFeatured: false,
  },

  {
    id: 3,
    title: "Music Streaming App",
    description: "Mobile App Design",
    image: "/images/music.png",
    year: "2023",
    link: "https://www.behance.net/gallery/193454669/Music-Streaming-Redesign-Concept",
    isFeatured: true,
  },
];

const tabs = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "case-studies",
    name: "Case Studies",
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const renderTabContent = () => {
    switch (activeTab) {
      case "all":
        return (
          <div className="lg:space-y-20 space-y-12">
            <div className="grid lg:grid-cols-3 lg:gap-6 gap-12">
              {portfolio.map((item) => (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}
                  key={item.id}
                  className="lg:space-y-4 space-y-2 rounded-xl"
                >
                  <div className="h-[350px]">
                    <Image
                      src={item.image}
                      alt="Portfolio"
                      width={600}
                      height={600}
                      className=" rounded-t h-full object-cover"
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
                        color="#fff"
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
            <div className="grid lg:grid-cols-3 lg:gap-6 gap-12">
              {caseStudies.map((item) => (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}
                  key={item.id}
                  className="lg:space-y-4 space-y-2 rounded-xl"
                >
                  <div className="h-[350px]">
                    <Image
                      src={item.image}
                      alt="Portfolio"
                      width={600}
                      height={600}
                      className=" rounded-t h-full object-cover"
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
                        color="#ff"
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
          </div>
        );
      case "projects":
        return (
          <div className="grid lg:grid-cols-3 lg:gap-6 gap-12">
            {portfolio.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                target="_blank"
                rel="noopener noreferrer"
                className="lg:space-y-4 space-y-2 rounded-xl"
              >
                <div className="h-[350px]">
                  <Image
                    src={item.image}
                    alt="Portfolio"
                    width={600}
                    height={600}
                    className=" rounded-t h-full object-cover"
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
                      color="#fff"
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
        );
      case "case-studies":
        return (
          <div className="grid lg:grid-cols-3 lg:gap-6 gap-12">
            {caseStudies.map((item) => (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={`/portfolio/${item.id}`}
                key={item.id}
                className="lg:space-y-4 space-y-2 rounded-xl"
              >
                <div className="h-[350px]">
                  <Image
                    src={item.image}
                    alt="Portfolio"
                    width={600}
                    height={600}
                    className=" rounded-t h-full object-cover"
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
                      color="#fff"
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
        );
      default:
        return null;
    }
  };
  return (
    <main
      id="portfolio"
      className="container mx-auto px-8 mb-20 flex flex-col justify-center items-start lg:gap-20 gap-8 min-h-screen"
    >
      <div className="space-y-6 lg:pr-8 lg:text-center">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
          Creating Memorable Designs for{" "}
          <span className="text-primary">Web, Mobile,</span> and{" "}
          <span className="text-primary">Digital Experiences</span>{" "}
        </h1>
        <p>
          Our user-focused designs optimize efficiency and drive business
          success.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "pBtn text-primary" : "sBtn"
              } flex gap-2 items-center py-2 rounded-full lg:text-sm text-foreground text-xs font-normal`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div>{renderTabContent()}</div>
      </div>
      <div className="flex w-full  lg:justify-end">
        <Link
          href="https://www.behance.net/raksmeyrat"
          target="_blank"
          rel="noopener noreferrer"
          className="pBtn flex gap-2 items-center"
        >
          View More Projects{" "}
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
