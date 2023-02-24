import { initTRPC } from "@trpc/server";
import { awsLambdaRequestHandler } from "@trpc/server/adapters/aws-lambda";
import { z } from "zod";

const t = initTRPC.create();

const userRouter = t.router({
  hello: t.procedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Hello ${input.name}`;
    }),
});

const utilRouter = t.router({
  genRandom: t.procedure
    .input(z.object({ num: z.number() }))
    .query(({ input }) => {
      return Math.floor(Math.random() * 100) / input.num;
    }),
});

const multiRouter = t.router({
  user: userRouter,
  util: utilRouter,
});
// Export type router type signature,
// NOT the router itself.
export type SimpleRouter = typeof multiRouter;

export const handler = awsLambdaRequestHandler({
  router: multiRouter,
});
