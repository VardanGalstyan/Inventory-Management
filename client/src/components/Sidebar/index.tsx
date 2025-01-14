"use client";

import { useAppSelector } from "@/redux";
import SidebarButton from "@/ui/buttons/sidebar-button";
import clsx from "clsx";
import SidebarLink from "./SidebarLink";
import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  SlidersHorizontal,
  User,
} from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  const { isSidebarCollapsed } = useAppSelector((state) => state.global);

  return (
    <div
      className={clsx(
        "fixed flex flex-col bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40",
        isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
      )}
    >
      {/* TOP LOGO */}
      <div
        className={clsx(
          "flex gap-3 justify-between md:justify-normal items-center pt-8",
          isSidebarCollapsed ? "px-5" : "px-8"
        )}
      >
        <div>
          <Image
            src="https://inventory-management-gallas.s3.eu-central-1.amazonaws.com/logo.png"
            width={50}
            height={50}
            className="rounded-full h-full object-cover"
            alt="logo"
          />
        </div>
        <h1
          className={clsx(
            "font-extrabold text-2xl",
            isSidebarCollapsed ? "hidden" : "block"
          )}
        >
          EDSTOCK
        </h1>
        <div className="md:hidden">
          <SidebarButton />
        </div>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8">
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          isCollapsed={isSidebarCollapsed}
          label="Dashboard"
        />
        <SidebarLink
          href="/inventory"
          icon={Archive}
          isCollapsed={isSidebarCollapsed}
          label="Invetory"
        />
        <SidebarLink
          href="/products"
          icon={Clipboard}
          isCollapsed={isSidebarCollapsed}
          label="Producst"
        />
        <SidebarLink
          href="/users"
          icon={User}
          isCollapsed={isSidebarCollapsed}
          label="Users"
        />
        <SidebarLink
          href="/settings"
          icon={SlidersHorizontal}
          isCollapsed={isSidebarCollapsed}
          label="Settings"
        />
        <SidebarLink
          href="/expenses"
          icon={CircleDollarSign}
          isCollapsed={isSidebarCollapsed}
          label="Expenses"
        />
      </div>

      {/* FOOTER */}
      <div className={clsx(isSidebarCollapsed ? "hidden" : "block", "mb-10")}>
        <p className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Edstock
        </p>
      </div>
    </div>
  );
};
export default Sidebar;
