"use client";

import { cn } from "@/lib/utils";
import { Building2, CircleUserRound, LayoutGrid, MessageSquareText, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const routes = [
  {
    label: "Dashbaord",
    icon: LayoutGrid,
    href: "/dashboard",
    color: "gray-800",
  },
  {
    label: "Property",
    icon: Building2,
    href: "/property",
    color: "gray-800",
  },
  {
    label: "Agent",
    icon: Users,
    href: "/agent",
    color: "gray-800",
  },
  {
    label: "Review",
    icon: Star,
    href: "/review",
    color: "gray-800",
  },
  {
    label: "Message",
    icon: MessageSquareText,
    href: "/message",
    color: "gray-800",
  },
  {
    label: "My Profile",
    icon: CircleUserRound,
    href: "/myProfile",
    color: "gray-800",
  },

  
];

export const Sidebar = () => {
  // for storing the path state and highlightning the active link in the sidebar
  const pathname = usePathname()
  return (
    <>
      <div className="space-y-4 py-4 flex flex-col h-full bg-white text-gray-800">
        <div className="px-3 py-2 flex-1">
          <Link href="/dashboard" className="flex items-center pl-3 mb-14">
            <div className="relative w-12 h-12 mr-4">
              <Image src="/Vector.svg" width="60" height="60" alt="" />
            </div>
            <h1 className="font-bold text-black text-2xl">Yariga</h1>
          </Link>
          <div className='"space-y-1'>
            {routes.map((route) => (
              <Link href={route.href} key={route.href}
              className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-blue-600 rounded-lg transition"
              ,
              pathname === route.href ? "text-white bg-blue-600" : "text-gray-800"
              )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
