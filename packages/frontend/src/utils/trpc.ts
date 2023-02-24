// pages/index.tsx
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@personal-branding/functions/trpc/router/index";
import superjson from "superjson";

export const trpcVanillaClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${import.meta.env.PUBLIC_API_URL}/trpc`,
    }),
  ],
});

export const tes = import.meta.env.PUBLIC_API_URL;
