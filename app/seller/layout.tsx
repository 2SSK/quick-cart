"use client";
import Navbar from "@/components/seller/Navbar";
import { PropsWithChildren } from "react";
import Sidebar from "@/components/seller/Sidebar";
import React from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      <div className="flex w-full">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
