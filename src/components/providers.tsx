"use client";

import { QueryProvider } from "@/components/query-provider";
import { Modals } from "./modals";
import { SubscriptionAlert } from "@/features/subscriptions/components/subscription-alert";

interface ProvidersProps {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryProvider>
      <Modals />
      <SubscriptionAlert />
      {children}
    </QueryProvider>
  );
};
