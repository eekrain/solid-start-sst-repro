import { StackContext, Api, AstroSite } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
      "GET /trpc/{proxy+}": "packages/functions/src/trpc/index.handler",
      "POST /trpc/{proxy+}": "packages/functions/src/trpc/index.handler",
    },
    cors: true,
  });

  const site = new AstroSite(stack, "Site", {
    path: "packages/frontend",
    environment: {
      PUBLIC_API_URL: api.url,
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
    SiteURL: site.url || "localhost",
  });
}
