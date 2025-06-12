"use client";
import React from "react";
import Header from "./Header";

const LayoutGeneral = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header />
      {children}
    </div>
  );
};
export default LayoutGeneral;
