// utils/trpc.ts
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@personal-branding/functions/simple";

export const trpc = createTRPCReact<AppRouter>();
