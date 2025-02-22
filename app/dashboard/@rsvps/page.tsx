import { Badge } from "@/components/ui/badge";
import { getRsvpsForDashboard } from "@/utils/rsvps";
import { getCurrentUser } from "@/utils/users";

import Link from "next/link";

const statusColors: any = {
  going: "default",
  maybe: "destructive",
  outlined: "destructive",
};
const RsvpsSlot = async () => {
  const user = await getCurrentUser();
  const data = await getRsvpsForDashboard(user.id);

  return (
    <div className="w-full h-full p-4 flex justify-center">
      <div className="w-full">
        <h2 className="text-center text-xl">{`RSVPs`}</h2>
        <div className="rounded-md border border-default-100 my-8">
          {data.map(({ rsvps, events, attendees }) => (
            <div
              key={rsvps?.id}
              className="border-b border-default-100 p-2 flex gap-2"
            >
              <span>{attendees.name}</span>
              <span>
                <Badge variant={statusColors[rsvps?.status ?? "maybe"]}>
                  {rsvps?.status}
                </Badge>
              </span>
              <span>
                <Link href={`/dashboard/events/${events?.id}`}>
                  <Badge variant="outline">{events?.name}</Badge>
                </Link>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RsvpsSlot;
