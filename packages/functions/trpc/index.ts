import { initTRPC } from "@trpc/server";
import { awsLambdaRequestHandler } from "@trpc/server/adapters/aws-lambda";
import { createContext } from "./context";
import { appRouter } from "./router";
import superjson from "superjson";

const t = initTRPC.create();

export const router = t.router;
export const baseProcedure = t.procedure;

export const handler = awsLambdaRequestHandler({
  router: appRouter,
});
