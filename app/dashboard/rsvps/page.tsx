import { getRsvpsForDashboard } from "@/utils/rsvps";
import { getCurrentUser } from "@/utils/users";
import { type FC } from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { statusColors } from "../@events/page";

interface PageProps {}

const Page: FC<PageProps> = async ({}) => {
  const user = await getCurrentUser();
  const data = await getRsvpsForDashboard(user.id);
  return (
    <div className="rounded my-8 space-y-4">
      {data.map(({ rsvps, events, attendees }) => (
        <div key={rsvps?.id} className="border rounded p-2 flex gap-2">
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
  );
};

export default Page;
