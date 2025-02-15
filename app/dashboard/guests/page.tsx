import { Badge } from "@/components/ui/badge";
import { getAllEvents } from "@/utils/events";
import { getCurrentUser } from "@/utils/users";
import Link from "next/link";
import { type FC } from "react";
import { statusColors } from "../@events/page";
import { getGuestList } from "@/utils/attendees";

interface PageProps {}

const Page: FC<PageProps> = async ({}) => {
  const user = await getCurrentUser();
  const events = await getGuestList(user.id);
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="border rounded p-2 flex gap-2">
          <Link href={`/dashboard/events/${event.id}`}>
            <span>{event.name}</span>
          </Link>

          <span>
            <Badge variant={"outline"}>{event.email}</Badge>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Page;
