import { StackContext, Api as SSTApi, use } from "sst/constructs";
import DynamoDB from "./DynamoDB";

const Api = ({ stack }: StackContext) => {
  const dynamodb = use(DynamoDB);
  const api = new SSTApi(stack, "MyApi", {
    defaults: {
      function: {
        bind: [dynamodb],
      },
    },
    cors: true,
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
      "GET /trpc/{proxy+}": "packages/functions/src/trpc/lambda.handler",
      "POST /trpc/{proxy+}": "packages/functions/src/trpc/lambda.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return api;
};

export default Api;
