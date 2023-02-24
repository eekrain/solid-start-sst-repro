// utils/trpc.ts
import { createTRPCReact } from "@trpc/react-query";
import type { SimpleRouter } from "@personal-branding/functions/simple";
import type { MultiRouter } from "@personal-branding/functions/trpc/utils";

export const trpcSimple = createTRPCReact<SimpleRouter>();
export const trpcMulti = createTRPCReact<MultiRouter>();
