import { Badge } from "@/components/ui/badge";
import { getAllEvents } from "@/utils/events";
import { getCurrentUser } from "@/utils/users";
import Link from "next/link";
import { type FC } from "react";
import { statusColors } from "../@events/page";

interface PageProps {}

const Page: FC<PageProps> = async ({}) => {
  const user = await getCurrentUser();
  const events = await getAllEvents(user.id);
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="border rounded p-2 flex gap-2">
          <Link href={`/dashboard/events/${event.id}`}>
            <span>{event.name}</span>
          </Link>
          <span>
            <Badge variant={statusColors[event.status]}>{event.status}</Badge>
          </span>
          <span>
            <Badge variant={"outline"}>{event.name}</Badge>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Page;
