"use client";

import Sidebar from "@/components/Sidebar";
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
    <div className="flex h-screen">
      <Sidebar />
      <div className="max-w-7xl mx-auto w-full">
        <div className=" mt-10 w-full">
          {path === "/dashboard" ? (
            <div className="grid grid-cols-3 w-full gap-10 border rounded">
              <div>{children}</div>
              <div className=" col-span-2">
                <div className=" border w-full">{events}</div>
                <div className=" border">{rsvps}</div>
              </div>
            </div>
          ) : (
            <div>{children}</div>
          )}
        </div>
      </div>
    </div>
  );
}
