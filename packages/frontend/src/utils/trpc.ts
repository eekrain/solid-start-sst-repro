// pages/index.tsx
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { MyRouter } from "@personal-branding/functions/trpc/utils";

export const trpcVanillaClient = createTRPCProxyClient<MyRouter>({
  links: [
    httpBatchLink({
      url:
        `${import.meta.env.PUBLIC_API_URL}/trpc` ||
        "http://localhost:3000/trpc",
    }),
  ],
});
