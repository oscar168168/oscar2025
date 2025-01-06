import React from "react";

export const Footer = () => {
  return (
    <main className="mx-auto p-8 flex flex-col justify-center items-center lg:min-h-[50vh] lg:gap-12 gap-8 bg-background border-t">
      <p className="text-center">
        © {new Date().getFullYear()} Oscar. All rights reserved.
      </p>
    </main>
  );
};
