import { redirect } from "next/navigation";

import { auth } from "@/auth";

export const protectServer = async () => {
  const session = await auth();
  console.log(['session', session]);

  if (!session) {
    redirect("/api/auth/signin");
  }
};
