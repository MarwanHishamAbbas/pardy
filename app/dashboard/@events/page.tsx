import { Badge, BadgeProps } from "@/components/ui/badge";
import { getEventsForDashboard } from "@/utils/events";
import { getCurrentUser } from "@/utils/users";
import Link from "next/link";
import { type FC } from "react";

interface EventSlotProps {}
const statusColors: any = {
  draft: "default",
  live: "secondary",
  started: "outline",
  ended: "secondary",
  canceled: "destructive",
};
const EventSlot: FC<EventSlotProps> = async ({}) => {
  const user = await getCurrentUser();
  const events = await getEventsForDashboard(user.id);
  return (
    <div className="w-full h-full p-4 flex justify-center">
      <div className="w-full">
        <h2 className="text-center text-xl">{`Latest Events`}</h2>
        <div className="rounded-md border border-default-100 my-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="border-b border-default-100 p-2 flex gap-2"
            >
              <Link href={`/dashboard/events/${event.id}`}>
                <span>{event.name}</span>
              </Link>
              <span>
                <Badge variant={statusColors[event.status]}>
                  {event.status}
                </Badge>
              </span>
              <span>
                <Badge variant={"outline"}>{event.name}</Badge>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSlot;
