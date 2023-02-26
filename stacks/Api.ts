import { StackContext, Api as SSTApi } from "sst/constructs";

const Api = ({ stack }: StackContext) => {
  const api = new SSTApi(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
      "GET /trpc/{proxy+}": "packages/functions/src/trpc/lambda.handler",
      "POST /trpc/{proxy+}": "packages/functions/src/trpc/lambda.handler",
    },
    cors: true,
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return api;
};

export default Api;
