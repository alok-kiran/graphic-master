"use client";

import { QueryProvider } from "@/components/query-provider";
import { Modals } from "./modals";

interface ProvidersProps {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryProvider>
      <Modals />
      {children}
    </QueryProvider>
  );
};
