"use client";
import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const CVDownloadButton = ({ cvUrl = "/images/account.png" }) => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "/images/account.png"; // Default filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="pBtn flex gap-2" onClick={handleDownload}>
      <Download className="" />
      Download CV
    </button>
  );
};

export default CVDownloadButton;
