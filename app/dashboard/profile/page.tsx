"use client";

import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data, status, update } = useSession();

  console.log(data?.user?.name);

  return <div>ProfilePage</div>;
};
export default ProfilePage;
