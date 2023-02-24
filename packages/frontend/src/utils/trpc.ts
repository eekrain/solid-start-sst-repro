// pages/index.tsx
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@personal-branding/functions/simple";

export const trpcVanillaClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: import.meta.env.PUBLIC_API_URL || "http://localhost:3000/trpc",
    }),
  ],
});

export const tes = import.meta.env.PUBLIC_API_URL;
