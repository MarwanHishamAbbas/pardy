import { getOneEvent } from "@/utils/events";
import { getCurrentUser } from "@/utils/users";
import { type FC } from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page: FC<PageProps> = async ({ params }) => {
  const { id } = await params;
  const user = await getCurrentUser();
  const event = await getOneEvent(user.id, id);
  return <div>{event?.name}</div>;
};

export default Page;
