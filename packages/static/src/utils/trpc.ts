// utils/trpc.ts
import { createTRPCReact } from "@trpc/react-query";
import type { MyRouter } from "@personal-branding/functions/trpc/utils";

export const trpcMulti = createTRPCReact<MyRouter>();
