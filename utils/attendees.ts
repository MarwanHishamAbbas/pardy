import "server-only";
import { db } from "@/db/db";
import { attendees, events, rsvps } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { delay } from "./delay";

export const getAttendeesCountForDashboard = async (userId: String) => {
  await delay();

  const counts = await db
    .select({
      totalAttendees: sql<number>`count(distinct ${attendees.id})`,
    })
    .from(events)
    .leftJoin(rsvps, eq(rsvps.eventId, events.id))
    .leftJoin(attendees, eq(attendees.id, rsvps.attendeeId))
    // @ts-ignore
    .where(eq(events.createdById, userId))
    .groupBy(events.id)
    .execute();
  const total = counts.reduce((acc, count) => acc + count.totalAttendees, 0);
  return total;
};
