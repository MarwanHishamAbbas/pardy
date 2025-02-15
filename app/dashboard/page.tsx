import { getAttendeesCountForDashboard } from "@/utils/attendees";
import { getCurrentUser } from "@/utils/users";
import Link from "next/link";
import { type FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = async ({}) => {
  const user = await getCurrentUser();
  const count = await getAttendeesCountForDashboard(user.id);
  return (
    <div className="w-full flex h-full justify-center items-center">
      <Link href="/">Home</Link>
      <div>
        <h4 className="text-lg">Attendees</h4>
        <h2 className="text-6xl font-semibold my-8 text-center">{count}</h2>
      </div>
    </div>
  );
};

export default Page;
