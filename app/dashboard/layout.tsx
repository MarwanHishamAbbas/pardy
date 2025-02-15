"use client";

import type { Metadata } from "next";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
  events,
  rsvps,
}: Readonly<{
  children: React.ReactNode;
  events: React.ReactNode;
  rsvps: React.ReactNode;
}>) {
  const path = usePathname();
  return (
    <div className="max-w-7xl mx-auto mt-10">
      {path === "/dashboard" ? (
        <div className="grid grid-cols-2 gap-10">
          <div className=" ">{children}</div>
          <div className=" flex flex-col gap-5">
            <div className=" border w-full">{events}</div>
            <div className=" border">{rsvps}</div>
          </div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
}
