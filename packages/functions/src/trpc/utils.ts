import { initTRPC } from "@trpc/server";
import { multiRouter } from "./router/_app";

const t = initTRPC.create();
export const router = t.router;
export const publicProcedur = t.procedure;

// Export type router type signature,
// NOT the router itself.
export type MyRouter = typeof multiRouter;
