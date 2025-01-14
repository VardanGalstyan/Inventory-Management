"use client";

import { useAppDispatch, useAppSelector } from "@/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Menu } from "lucide-react";

const SidebarButton = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  return (
    <button
      onClick={() => toggleSidebar()}
      className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
    >
      <Menu className="w-4 h-4" />
    </button>
  );
};

export default SidebarButton;
