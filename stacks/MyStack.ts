import { StackContext, Api, AstroSite } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
      "GET /trpc/{proxy+}": "packages/functions/src/trpc/index.handler",
      "POST /trpc/{proxy+}": "packages/functions/src/trpc/index.handler",
    },
  });

  const site = new AstroSite(stack, "Site", {
    path: "packages/frontend",
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
    SiteURL: site.url || "localhost",
  });
}
