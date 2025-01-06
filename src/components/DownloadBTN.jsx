"use client";
import React from "react";
import { Download } from "lucide-react";

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
    <button className="pBtn flex items-center gap-2" onClick={handleDownload}>
      <Download size={20} className="" />
      Download CV
    </button>
  );
};

export default CVDownloadButton;
