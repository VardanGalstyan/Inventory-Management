"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useAppSelector } from "@/redux";
import clsx from "clsx";
import { ReactNode } from "react";

const DashboardWrapper = ({ children }: { children: ReactNode }) => {
  const { isSidebarCollapsed, isDarkMode } = useAppSelector(
    (state) => state?.global
  );

  return (
    <div
      className={clsx(
        "flex bg-gray-50 text-gray-900 w-full min-h-screen",
        isDarkMode ? "dark" : "light"
      )}
    >
      <Sidebar />
      <main
        className={clsx(
          "flex flex-col w-full h-full py-7 px-9 bg-gray-50 ",
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        )}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
