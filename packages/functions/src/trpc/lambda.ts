import { awsLambdaRequestHandler } from "@trpc/server/adapters/aws-lambda";
import { multiRouter } from "./router/_app";

export const handler = awsLambdaRequestHandler({
  router: multiRouter,
});
