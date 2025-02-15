"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64  gap-10 shadow-md flex flex-col p-5">
      <h1 className="text-2xl font-bold">Pardy</h1>
      <nav className="flex-1 flex flex-col gap-2">
        <NavLink href="/dashboard" pathname={pathname}>
          Dashboard
        </NavLink>
        <NavLink href="/dashboard/events" pathname={pathname}>
          Events
        </NavLink>
        <NavLink href="/dashboard/rsvps" pathname={pathname}>
          RSVPs
        </NavLink>
      </nav>

      <Button className="w-full ">Sign Out</Button>
    </div>
  );
}

function NavLink({
  href,
  children,
  pathname,
}: {
  href: string;
  children: React.ReactNode;
  pathname: string | null;
}) {
  const isActive = href === pathname;

  return (
    <Button
      asChild
      variant={isActive ? "default" : "ghost"}
      className="justify-start w-full "
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
