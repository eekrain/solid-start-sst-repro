import { initTRPC } from "@trpc/server";
import { awsLambdaRequestHandler } from "@trpc/server/adapters/aws-lambda";

const t = initTRPC.create();

interface User {
  id: string;
  name: string;
}

const userList: User[] = [
  {
    id: "1",
    name: "KATT",
  },
];

const simpleRouter = t.router({
  userById: t.procedure
    // The input is unknown at this time.
    // A client could have sent us anything
    // so we won't assume a certain data type.
    .input((val: unknown) => {
      // If the value is of type string, return it.
      // TypeScript now knows that this value is a string.
      if (typeof val === "string") return val;

      // Uh oh, looks like that input wasn't a string.
      // We will throw an error instead of running the procedure.
      throw new Error(`Invalid input: ${typeof val}`);
    })
    .query((req) => {
      const { input } = req;

      const user = userList.find((u) => u.id === input);

      return user;
    }),
});

// Export type router type signature,
// NOT the router itself.
export type SimpleRouter = typeof simpleRouter;

export const handler = awsLambdaRequestHandler({
  router: simpleRouter,
});
